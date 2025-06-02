"use strict";

{
    // Update the DOM_COMPONENT_ID to be unique to your plugin.
    // It must match the value set in instance.js as well.
    const DOM_COMPONENT_ID = "Genvid_Marketplace";

    // This class handles messages from the runtime, which may be in a Web Worker.
    const HANDLER_CLASS = class MarketplaceDOMHandler extends globalThis.DOMHandler
    {
        constructor(iRuntime: IRuntimeInterface)
        {
            super(iRuntime, DOM_COMPONENT_ID);
            
            // This provides a table of message names to functions to call for those messages.
            this.AddRuntimeMessageHandlers([
                ["get-marketplace-info",          async () => this._GetMarketplaceInfo()],
            ]);
        }

        async _GetMarketplaceInfo() {

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const marketplace = (globalThis as any)['plugins']?.['marketplace'];
            return marketplace ?? { name: "unavailable", info: { name: "unavailable" }};
        }
    };

    globalThis.RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);
}