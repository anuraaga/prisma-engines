use sql_schema_describer::{
    Column, ColumnArity, ColumnType, ColumnTypeFamily, DefaultValue, ForeignKey, SqlSchema, Table,
};

pub(crate) fn walk_columns<'a>(schema: &'a SqlSchema) -> impl Iterator<Item = ColumnRef<'a>> + 'a {
    schema.tables.iter().flat_map(move |table| {
        table
            .columns
            .iter()
            .map(move |column| ColumnRef { schema, column, table })
    })
}

pub(crate) fn find_column<'a>(schema: &'a SqlSchema, table_name: &str, column_name: &str) -> Option<ColumnRef<'a>> {
    schema
        .tables
        .iter()
        .find(move |table| table.name == table_name)
        .and_then(move |table| {
            table
                .columns
                .iter()
                .find(|column| column.name == column_name)
                .map(|column| ColumnRef { schema, table, column })
        })
}

#[derive(Debug, Clone, Copy)]
pub(crate) struct ColumnRef<'a> {
    pub(crate) schema: &'a SqlSchema,
    pub(crate) column: &'a Column,
    pub(crate) table: &'a Table,
}

impl<'a> ColumnRef<'a> {
    pub(crate) fn arity(&self) -> &ColumnArity {
        &self.column.tpe.arity
    }

    pub(crate) fn name(&self) -> &'a str {
        &self.column.name
    }

    pub(crate) fn default(&self) -> Option<&'a DefaultValue> {
        self.column.default.as_ref()
    }

    pub(crate) fn column_type(&self) -> &'a ColumnType {
        &self.column.tpe
    }

    pub(crate) fn column_type_family(&self) -> &'a ColumnTypeFamily {
        &self.column.tpe.family
    }

    pub(crate) fn auto_increment(&self) -> bool {
        self.column.auto_increment
    }

    pub(crate) fn is_required(&self) -> bool {
        self.column.is_required()
    }

    pub(crate) fn table(&self) -> TableRef<'a> {
        TableRef {
            schema: self.schema,
            table: self.table,
        }
    }

    pub(crate) fn schema(&self) -> &'a SqlSchema {
        self.schema
    }
}

#[derive(Clone, Copy)]
pub(crate) struct TableRef<'a> {
    pub(crate) schema: &'a SqlSchema,
    pub(crate) table: &'a Table,
}

impl<'a> TableRef<'a> {
    pub(crate) fn new(schema: &'a SqlSchema, table: &'a Table) -> Self {
        Self { schema, table }
    }

    pub(crate) fn column(&self, column_name: &str) -> Option<ColumnRef<'a>> {
        self.columns().find(|column| column.name() == column_name)
    }

    pub(crate) fn columns<'b>(&'b self) -> impl Iterator<Item = ColumnRef<'a>> + 'b {
        self.table.columns.iter().map(move |column| ColumnRef {
            column,
            schema: self.schema,
            table: self.table,
        })
    }

    pub(crate) fn name(&self) -> &'a str {
        &self.table.name
    }

    pub(crate) fn foreign_key_for_column(&self, column: &str) -> Option<&'a ForeignKey> {
        self.table.foreign_key_for_column(column)
    }
}

pub(crate) trait SqlSchemaExt {
    fn table_ref<'a>(&'a self, name: &str) -> Option<TableRef<'a>>;
}

impl SqlSchemaExt for SqlSchema {
    fn table_ref<'a>(&'a self, name: &str) -> Option<TableRef<'a>> {
        Some(TableRef {
            table: self.table(name).ok()?,
            schema: self,
        })
    }
}
