(function() {var type_impls = {
"alloy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ResponsePayload%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#18\">source</a><a href=\"#impl-Clone-for-ResponsePayload%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#18\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, ErrData&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy::rpc::json_rpc::BorrowedResponsePayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ResponsePayload%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#18\">source</a><a href=\"#impl-Debug-for-ResponsePayload%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#18\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy::rpc::json_rpc::BorrowedResponsePayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponsePayload%3C%26RawValue,+%26RawValue%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#35\">source</a><a href=\"#impl-ResponsePayload%3C%26RawValue,+%26RawValue%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;&amp;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>, &amp;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_owned\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#38\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.into_owned\" class=\"fn\">into_owned</a>(self) -&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a></h4></section></summary><div class=\"docblock\"><p>Convert this borrowed response payload into an owned payload by copying\nthe data from the deserializer (if necessary).</p>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedResponsePayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponsePayload%3CPayload,+Data%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#108-110\">source</a><a href=\"#impl-ResponsePayload%3CPayload,+Data%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Payload, Data&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, Data&gt;<div class=\"where\">where\n    Data: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>&gt; + 'a,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_error_as\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#119\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.try_error_as\" class=\"fn\">try_error_as</a>&lt;T&gt;(&amp;'a self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Attempt to deserialize the error payload, borrowing from the payload if\nnecessary.</p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<ul>\n<li><code>None</code> if the payload is a success</li>\n<li><code>Some(Ok(T))</code> if the payload is an error and can be deserialized</li>\n<li><code>Some(Err(serde_json::Error))</code> if the payload is an error and can’t be deserialized as <code>T</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize_error\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#130-132\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.deserialize_error\" class=\"fn\">deserialize_error</a>&lt;T&gt;(\n    self,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, T&gt;, <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, Data&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,</div></h4></section></summary><div class=\"docblock\"><p>Deserialize an Error payload, if possible, transforming this type.</p>\n<h5 id=\"returns-1\"><a class=\"doc-anchor\" href=\"#returns-1\">§</a>Returns</h5>\n<ul>\n<li><code>Ok(ResponsePayload&lt;Payload, T&gt;)</code> if the payload is an error, or if the payload is an\nerror and can be deserialized as <code>T</code>.</li>\n<li><code>Err(self)</code> if the payload is an error and can’t be deserialized.</li>\n</ul>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedResponsePayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponsePayload%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#46\">source</a><a href=\"#impl-ResponsePayload%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_success\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#48\">source</a><h4 class=\"code-header\">pub const fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.as_success\" class=\"fn\">as_success</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Payload</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Fallible conversion to the successful payload.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_error\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#56\">source</a><h4 class=\"code-header\">pub const fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.as_error\" class=\"fn\">as_error</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Fallible conversion to the error object.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_success\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#64\">source</a><h4 class=\"code-header\">pub const fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.is_success\" class=\"fn\">is_success</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the response payload is a success.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_error\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#69\">source</a><h4 class=\"code-header\">pub const fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.is_error\" class=\"fn\">is_error</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the response payload is an error.</p>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedResponsePayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponsePayload%3CPayload,+ErrData%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#74-76\">source</a><a href=\"#impl-ResponsePayload%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Payload, ErrData&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>&gt; + 'a,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_success_as\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#86\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.try_success_as\" class=\"fn\">try_success_as</a>&lt;T&gt;(&amp;'a self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.117/serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Attempt to deserialize the success payload, borrowing from the payload\nif necessary.</p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<ul>\n<li><code>None</code> if the payload is an error</li>\n<li><code>Some(Ok(T))</code> if the payload is a success and can be deserialized</li>\n<li><code>Some(Err(serde_json::Error))</code> if the payload is a success and can’t be deserialized as\n<code>T</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize_success\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/response/payload.rs.html#97-99\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html#tymethod.deserialize_success\" class=\"fn\">deserialize_success</a>&lt;T&gt;(\n    self,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;T, ErrData&gt;, <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePayload.html\" title=\"enum alloy::rpc::json_rpc::ResponsePayload\">ResponsePayload</a>&lt;Payload, ErrData&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.203/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,</div></h4></section></summary><div class=\"docblock\"><p>Deserialize a Success payload, if possible, transforming this type.</p>\n<h5 id=\"returns-1\"><a class=\"doc-anchor\" href=\"#returns-1\">§</a>Returns</h5>\n<ul>\n<li><code>Ok(ResponsePayload&lt;T&gt;)</code> if the payload is an error, or if the payload is a success and\ncan be deserialized as <code>T</code></li>\n<li><code>Err(self)</code> if the payload is a success and can’t be deserialized</li>\n</ul>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedResponsePayload"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()