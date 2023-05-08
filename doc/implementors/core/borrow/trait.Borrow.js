(function() {var implementors = {
"arrayvec":[["impl&lt;T, const CAP: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;T, CAP&gt;"],["impl&lt;const CAP: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/core/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;CAP&gt;"]],
"ascii":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"ascii/struct.AsciiStr.html\" title=\"struct ascii::AsciiStr\">AsciiStr</a>&gt; for <a class=\"struct\" href=\"ascii/struct.AsciiString.html\" title=\"struct ascii::AsciiString\">AsciiString</a>"]],
"bitvec":[["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;&gt; for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</span>"],["impl&lt;A, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;&lt;A as <a class=\"trait\" href=\"bitvec/view/trait.BitView.html\" title=\"trait bitvec::view::BitView\">BitView</a>&gt;::<a class=\"associatedtype\" href=\"bitvec/view/trait.BitView.html#associatedtype.Store\" title=\"type bitvec::view::BitView::Store\">Store</a>, O&gt;&gt; for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</span>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;&gt; for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</span>"]],
"bson":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"bson/raw/struct.RawDocument.html\" title=\"struct bson::raw::RawDocument\">RawDocument</a>&gt; for <a class=\"struct\" href=\"bson/raw/struct.RawDocumentBuf.html\" title=\"struct bson::raw::RawDocumentBuf\">RawDocumentBuf</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"bson/raw/struct.RawArray.html\" title=\"struct bson::raw::RawArray\">RawArray</a>&gt; for <a class=\"struct\" href=\"bson/raw/struct.RawArrayBuf.html\" title=\"struct bson::raw::RawArrayBuf\">RawArrayBuf</a>"]],
"bytes":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>"]],
"crossbeam_epoch":[["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;"]],
"generic_array":[["impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"generic_array/struct.GenericArray.html\" title=\"struct generic_array::GenericArray\">GenericArray</a>&lt;T, N&gt;<span class=\"where fmt-newline\">where\n    N: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;T&gt;,</span>"]],
"http":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"http/header/struct.HeaderName.html\" title=\"struct http::header::HeaderName\">HeaderName</a>"]],
"openssl":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/dh/struct.DhRef.html\" title=\"struct openssl::dh::DhRef\">DhRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/dh/struct.Dh.html\" title=\"struct openssl::dh::Dh\">Dh</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1ObjectRef.html\" title=\"struct openssl::asn1::Asn1ObjectRef\">Asn1ObjectRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Object.html\" title=\"struct openssl::asn1::Asn1Object\">Asn1Object</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/cms/struct.CmsContentInfoRef.html\" title=\"struct openssl::cms::CmsContentInfoRef\">CmsContentInfoRef</a>&gt; for <a class=\"struct\" href=\"openssl/cms/struct.CmsContentInfo.html\" title=\"struct openssl::cms::CmsContentInfo\">CmsContentInfo</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/conf/struct.ConfRef.html\" title=\"struct openssl::conf::ConfRef\">ConfRef</a>&gt; for <a class=\"struct\" href=\"openssl/conf/struct.Conf.html\" title=\"struct openssl::conf::Conf\">Conf</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/cipher_ctx/struct.CipherCtxRef.html\" title=\"struct openssl::cipher_ctx::CipherCtxRef\">CipherCtxRef</a>&gt; for <a class=\"struct\" href=\"openssl/cipher_ctx/struct.CipherCtx.html\" title=\"struct openssl::cipher_ctx::CipherCtx\">CipherCtx</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/srtp/struct.SrtpProtectionProfileRef.html\" title=\"struct openssl::srtp::SrtpProtectionProfileRef\">SrtpProtectionProfileRef</a>&gt; for <a class=\"struct\" href=\"openssl/srtp/struct.SrtpProtectionProfile.html\" title=\"struct openssl::srtp::SrtpProtectionProfile\">SrtpProtectionProfile</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509CrlRef.html\" title=\"struct openssl::x509::X509CrlRef\">X509CrlRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Crl.html\" title=\"struct openssl::x509::X509Crl\">X509Crl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509NameEntryRef.html\" title=\"struct openssl::x509::X509NameEntryRef\">X509NameEntryRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509NameEntry.html\" title=\"struct openssl::x509::X509NameEntry\">X509NameEntry</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/md_ctx/struct.MdCtxRef.html\" title=\"struct openssl::md_ctx::MdCtxRef\">MdCtxRef</a>&gt; for <a class=\"struct\" href=\"openssl/md_ctx/struct.MdCtx.html\" title=\"struct openssl::md_ctx::MdCtx\">MdCtx</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509ObjectRef.html\" title=\"struct openssl::x509::X509ObjectRef\">X509ObjectRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Object.html\" title=\"struct openssl::x509::X509Object\">X509Object</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509Ref.html\" title=\"struct openssl::x509::X509Ref\">X509Ref</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509.html\" title=\"struct openssl::x509::X509\">X509</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/string/struct.OpensslStringRef.html\" title=\"struct openssl::string::OpensslStringRef\">OpensslStringRef</a>&gt; for <a class=\"struct\" href=\"openssl/string/struct.OpensslString.html\" title=\"struct openssl::string::OpensslString\">OpensslString</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1IntegerRef.html\" title=\"struct openssl::asn1::Asn1IntegerRef\">Asn1IntegerRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Integer.html\" title=\"struct openssl::asn1::Asn1Integer\">Asn1Integer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509ExtensionRef.html\" title=\"struct openssl::x509::X509ExtensionRef\">X509ExtensionRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Extension.html\" title=\"struct openssl::x509::X509Extension\">X509Extension</a>"],["impl&lt;T: <a class=\"trait\" href=\"openssl/stack/trait.Stackable.html\" title=\"trait openssl::stack::Stackable\">Stackable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/stack/struct.StackRef.html\" title=\"struct openssl::stack::StackRef\">StackRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/stack/struct.Stack.html\" title=\"struct openssl::stack::Stack\">Stack</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/store/struct.X509LookupMethodRef.html\" title=\"struct openssl::x509::store::X509LookupMethodRef\">X509LookupMethodRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/x509/store/struct.X509LookupMethod.html\" title=\"struct openssl::x509::store::X509LookupMethod\">X509LookupMethod</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/store/struct.X509LookupRef.html\" title=\"struct openssl::x509::store::X509LookupRef\">X509LookupRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/x509/store/struct.X509Lookup.html\" title=\"struct openssl::x509::store::X509Lookup\">X509Lookup</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/rsa/struct.RsaRef.html\" title=\"struct openssl::rsa::RsaRef\">RsaRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/rsa/struct.Rsa.html\" title=\"struct openssl::rsa::Rsa\">Rsa</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyParamRef.html\" title=\"struct openssl::x509::verify::X509VerifyParamRef\">X509VerifyParamRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyParam.html\" title=\"struct openssl::x509::verify::X509VerifyParam\">X509VerifyParam</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509RevokedRef.html\" title=\"struct openssl::x509::X509RevokedRef\">X509RevokedRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Revoked.html\" title=\"struct openssl::x509::X509Revoked\">X509Revoked</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ec/struct.EcKeyRef.html\" title=\"struct openssl::ec::EcKeyRef\">EcKeyRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/ec/struct.EcKey.html\" title=\"struct openssl::ec::EcKey\">EcKey</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509StoreContextRef.html\" title=\"struct openssl::x509::X509StoreContextRef\">X509StoreContextRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509StoreContext.html\" title=\"struct openssl::x509::X509StoreContext\">X509StoreContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspRequestRef.html\" title=\"struct openssl::ocsp::OcspRequestRef\">OcspRequestRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspRequest.html\" title=\"struct openssl::ocsp::OcspRequest\">OcspRequest</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspBasicResponseRef.html\" title=\"struct openssl::ocsp::OcspBasicResponseRef\">OcspBasicResponseRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspBasicResponse.html\" title=\"struct openssl::ocsp::OcspBasicResponse\">OcspBasicResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ec/struct.EcPointRef.html\" title=\"struct openssl::ec::EcPointRef\">EcPointRef</a>&gt; for <a class=\"struct\" href=\"openssl/ec/struct.EcPoint.html\" title=\"struct openssl::ec::EcPoint\">EcPoint</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.GeneralNameRef.html\" title=\"struct openssl::x509::GeneralNameRef\">GeneralNameRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.GeneralName.html\" title=\"struct openssl::x509::GeneralName\">GeneralName</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Ref.html\" title=\"struct openssl::pkcs7::Pkcs7Ref\">Pkcs7Ref</a>&gt; for <a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7.html\" title=\"struct openssl::pkcs7::Pkcs7\">Pkcs7</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspResponseRef.html\" title=\"struct openssl::ocsp::OcspResponseRef\">OcspResponseRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspResponse.html\" title=\"struct openssl::ocsp::OcspResponse\">OcspResponse</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509ReqRef.html\" title=\"struct openssl::x509::X509ReqRef\">X509ReqRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Req.html\" title=\"struct openssl::x509::X509Req\">X509Req</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslSessionRef.html\" title=\"struct openssl::ssl::SslSessionRef\">SslSessionRef</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslSession.html\" title=\"struct openssl::ssl::SslSession\">SslSession</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslRef.html\" title=\"struct openssl::ssl::SslRef\">SslRef</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.Ssl.html\" title=\"struct openssl::ssl::Ssl\">Ssl</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/pkey_ctx/struct.PkeyCtxRef.html\" title=\"struct openssl::pkey_ctx::PkeyCtxRef\">PkeyCtxRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/pkey_ctx/struct.PkeyCtx.html\" title=\"struct openssl::pkey_ctx::PkeyCtx\">PkeyCtx</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/dsa/struct.DsaRef.html\" title=\"struct openssl::dsa::DsaRef\">DsaRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/dsa/struct.Dsa.html\" title=\"struct openssl::dsa::Dsa\">Dsa</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509NameRef.html\" title=\"struct openssl::x509::X509NameRef\">X509NameRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Name.html\" title=\"struct openssl::x509::X509Name\">X509Name</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/bn/struct.BigNumContextRef.html\" title=\"struct openssl::bn::BigNumContextRef\">BigNumContextRef</a>&gt; for <a class=\"struct\" href=\"openssl/bn/struct.BigNumContext.html\" title=\"struct openssl::bn::BigNumContext\">BigNumContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslContextRef.html\" title=\"struct openssl::ssl::SslContextRef\">SslContextRef</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslContext.html\" title=\"struct openssl::ssl::SslContext\">SslContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspOneReqRef.html\" title=\"struct openssl::ocsp::OcspOneReqRef\">OcspOneReqRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspOneReq.html\" title=\"struct openssl::ocsp::OcspOneReq\">OcspOneReq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1StringRef.html\" title=\"struct openssl::asn1::Asn1StringRef\">Asn1StringRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1String.html\" title=\"struct openssl::asn1::Asn1String\">Asn1String</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/pkcs12/struct.Pkcs12Ref.html\" title=\"struct openssl::pkcs12::Pkcs12Ref\">Pkcs12Ref</a>&gt; for <a class=\"struct\" href=\"openssl/pkcs12/struct.Pkcs12.html\" title=\"struct openssl::pkcs12::Pkcs12\">Pkcs12</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509AlgorithmRef.html\" title=\"struct openssl::x509::X509AlgorithmRef\">X509AlgorithmRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Algorithm.html\" title=\"struct openssl::x509::X509Algorithm\">X509Algorithm</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1BitStringRef.html\" title=\"struct openssl::asn1::Asn1BitStringRef\">Asn1BitStringRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1BitString.html\" title=\"struct openssl::asn1::Asn1BitString\">Asn1BitString</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/dsa/struct.DsaSigRef.html\" title=\"struct openssl::dsa::DsaSigRef\">DsaSigRef</a>&gt; for <a class=\"struct\" href=\"openssl/dsa/struct.DsaSig.html\" title=\"struct openssl::dsa::DsaSig\">DsaSig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ec/struct.EcGroupRef.html\" title=\"struct openssl::ec::EcGroupRef\">EcGroupRef</a>&gt; for <a class=\"struct\" href=\"openssl/ec/struct.EcGroup.html\" title=\"struct openssl::ec::EcGroup\">EcGroup</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/provider/struct.ProviderRef.html\" title=\"struct openssl::provider::ProviderRef\">ProviderRef</a>&gt; for <a class=\"struct\" href=\"openssl/provider/struct.Provider.html\" title=\"struct openssl::provider::Provider\">Provider</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspCertIdRef.html\" title=\"struct openssl::ocsp::OcspCertIdRef\">OcspCertIdRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspCertId.html\" title=\"struct openssl::ocsp::OcspCertId\">OcspCertId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/store/struct.X509StoreRef.html\" title=\"struct openssl::x509::store::X509StoreRef\">X509StoreRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/store/struct.X509Store.html\" title=\"struct openssl::x509::store::X509Store\">X509Store</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/pkey/struct.PKeyRef.html\" title=\"struct openssl::pkey::PKeyRef\">PKeyRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/pkey/struct.PKey.html\" title=\"struct openssl::pkey::PKey\">PKey</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1GeneralizedTimeRef.html\" title=\"struct openssl::asn1::Asn1GeneralizedTimeRef\">Asn1GeneralizedTimeRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1GeneralizedTime.html\" title=\"struct openssl::asn1::Asn1GeneralizedTime\">Asn1GeneralizedTime</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/ecdsa/struct.EcdsaSigRef.html\" title=\"struct openssl::ecdsa::EcdsaSigRef\">EcdsaSigRef</a>&gt; for <a class=\"struct\" href=\"openssl/ecdsa/struct.EcdsaSig.html\" title=\"struct openssl::ecdsa::EcdsaSig\">EcdsaSig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/lib_ctx/struct.LibCtxRef.html\" title=\"struct openssl::lib_ctx::LibCtxRef\">LibCtxRef</a>&gt; for <a class=\"struct\" href=\"openssl/lib_ctx/struct.LibCtx.html\" title=\"struct openssl::lib_ctx::LibCtx\">LibCtx</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/store/struct.X509StoreBuilderRef.html\" title=\"struct openssl::x509::store::X509StoreBuilderRef\">X509StoreBuilderRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/store/struct.X509StoreBuilder.html\" title=\"struct openssl::x509::store::X509StoreBuilder\">X509StoreBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.AccessDescriptionRef.html\" title=\"struct openssl::x509::AccessDescriptionRef\">AccessDescriptionRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.AccessDescription.html\" title=\"struct openssl::x509::AccessDescription\">AccessDescription</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/bn/struct.BigNumRef.html\" title=\"struct openssl::bn::BigNumRef\">BigNumRef</a>&gt; for <a class=\"struct\" href=\"openssl/bn/struct.BigNum.html\" title=\"struct openssl::bn::BigNum\">BigNum</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1TimeRef.html\" title=\"struct openssl::asn1::Asn1TimeRef\">Asn1TimeRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Time.html\" title=\"struct openssl::asn1::Asn1Time\">Asn1Time</a>"]],
"query_connector":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"query_connector/struct.DatasourceFieldName.html\" title=\"struct query_connector::DatasourceFieldName\">DatasourceFieldName</a>"]],
"serde_bytes":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"serde_bytes/struct.Bytes.html\" title=\"struct serde_bytes::Bytes\">Bytes</a>&gt; for <a class=\"struct\" href=\"serde_bytes/struct.ByteBuf.html\" title=\"struct serde_bytes::ByteBuf\">ByteBuf</a>"]],
"smallvec":[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]],
"time":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.69.0/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>&gt; for <a class=\"struct\" href=\"time/struct.Instant.html\" title=\"struct time::Instant\">Instant</a>"]],
"tinyvec":[["impl&lt;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;"],["impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;"],["impl&lt;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>]&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;"]],
"toml":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"toml/struct.Spanned.html\" title=\"struct toml::Spanned\">Spanned</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.69.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;"]],
"tonic":[["impl&lt;VE: ValueEncoding&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"tonic/metadata/struct.MetadataKey.html\" title=\"struct tonic::metadata::MetadataKey\">MetadataKey</a>&lt;VE&gt;"]],
"trust_dns_proto":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"trust_dns_proto/rr/domain/struct.Label.html\" title=\"struct trust_dns_proto::rr::domain::Label\">Label</a>"]],
"uuid":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Braced.html\" title=\"struct uuid::fmt::Braced\">Braced</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Urn.html\" title=\"struct uuid::fmt::Urn\">Urn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Simple.html\" title=\"struct uuid::fmt::Simple\">Simple</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"uuid/struct.Uuid.html\" title=\"struct uuid::Uuid\">Uuid</a>&gt; for <a class=\"struct\" href=\"uuid/fmt/struct.Hyphenated.html\" title=\"struct uuid::fmt::Hyphenated\">Hyphenated</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()