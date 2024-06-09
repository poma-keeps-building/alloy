searchState.loadedDescShard("alloy_transport", 0, "alloy-transport\nBasic, bearer or raw authentication in http or websocket …\nRC7617 HTTP Basic Auth\nRFC6750 Bearer Auth\nType alias for a pin-boxed future, with a <code>Send</code> bound on …\nA boxed, Clone-able <code>Transport</code> trait object.\nConnection details for a transport that can be boxed.\nJSON deserialization error.\nJSON deserialization error.\nContains the error value\nContains the error value\nServer returned an error response.\nServer returned an error response.\nReturned when a local pre-processing step fails. This …\nReturned when a local pre-processing step fails. This …\nServer returned a null response when a non-null response …\nServer returned a null response when a non-null response …\nContains the success value\nContains the success value\nPin-boxed future.\nRaw auth string\nAn RPC error.\nFuture for RPC-level requests.\nThe result of a JSON-RPC request.\nJSON serialization error.\nJSON serialization error.\nA <code>Transport</code> manages the JSON-RPC request/response …\nTransport error.\nTransport error.\nThe transport type that is returned by <code>connect</code>.\nConnection details for a transport.\nA transport error is an <code>RpcError</code> containing a …\nFuture for transport-level requests.\nA transport result is a <code>Result</code> containing a <code>TransportError</code>.\nRpc server returned an unsupported feature.\nRpc server returned an unsupported feature.\nFallible conversion to an error response.\nInstantiate a new <code>DeserError</code> from a <code>serde_json::Error</code> and …\nInstantiate a new <code>ErrorResp</code> from an error response.\nReturns the argument unchanged.\nConnect to a transport, and box it.\nConnect to the transport, returning a <code>Transport</code> instance.\nMacro that return an <code>impl Future</code> type, with a <code>Send</code> bound …\nCalls <code>U::from(self)</code>.\nCheck if the error is a deserialization error.\nCheck if the error is an error response.\nReturns <code>true</code> if the transport connects to a local resource.\nReturns <code>true</code> if the transport is a local transport.\nCheck if the error is a local usage error.\nCheck if the error is a null response.\nCheck if the error is a serialization error.\nCheck if the error is a transport error.\nCheck if the error is an unsupported feature error.\nInstantiate a new <code>LocalUsageError</code> from a custom error.\nInstantiate a new <code>LocalUsageError</code> from a custom error …\nInstantiate a new <code>SerError</code> from a <code>serde_json::Error</code>. This …\nMisc. utilities for building transports.\nThe underlying serde_json error.\nFor deser errors, the text that failed to deserialize.\nThe underlying serde_json error.\nFor deser errors, the text that failed to deserialize.\nA boxed, Clone-able <code>Transport</code> trait object.\nHelper trait for constructing <code>BoxTransport</code>.\nReturns a reference to the inner transport.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nInstantiate a new box transport from a suitable transport.\nBasic, bearer or raw authentication in http or websocket …\nRC7617 HTTP Basic Auth\nRFC6750 Bearer Auth\nRaw auth string\nInstantiate a new basic auth from an authority string.\nInstantiate a new basic auth from a username and password.\nInstantiate a new bearer auth from the given token.\nExtract the auth info from a URL.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nInstantiate a new raw auth from the given token.\nConnection details for a transport that can be boxed.\nThe transport type that is returned by <code>connect</code>.\nConnection details for a transport.\nConnect to a transport, and box it.\nConnect to the transport, returning a <code>Transport</code> instance.\nReturns <code>true</code> if the transport connects to a local resource.\nReturns <code>true</code> if the transport is a local transport.\nBackend connection task has stopped.\nCustom error.\nJSON deserialization error.\nContains the error value\nServer returned an error response.\nReturned when a local pre-processing step fails. This …\nMissing batch response.\nServer returned a null response when a non-null response …\nContains the success value\nPubsub service is not available for the current provider.\nJSON serialization error.\nTransport error.\nA transport error is an <code>RpcError</code> containing a …\nTransport error.\nA transport result is a <code>Result</code> containing a <code>TransportError</code>.\nRpc server returned an unsupported feature.\nInstantiate a new <code>TransportError::BackendGone</code>.\nInstantiate a new <code>TransportError</code> from a custom error.\nInstantiate a new <code>TransportError</code> from a custom error.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nInstantiate a new <code>TransportError</code> from a missing ID.\nInstantiate a new <code>TransportError::PubsubUnavailable</code>.\nReturns <code>true</code> if the error is potentially recoverable. This …\nThe underlying serde_json error.\nFor deser errors, the text that failed to deserialize.\nA <code>Transport</code> manages the JSON-RPC request/response …\nMake a boxed trait object by cloning this transport.\nMake a boxed trait object by cloning this transport.\nConvert this transport into a boxed trait object.\nConvert this transport into a boxed trait object.\nGuess whether the URL is local, based on the hostname.\nConvert to a <code>Box&lt;RawValue&gt;</code> from a <code>Serialize</code> type, mapping …")