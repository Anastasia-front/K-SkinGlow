// src/custom.d.ts
declare module "*.svg" {
	import * as React from "react";
	export const Icon: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	// const src: string;
	// export default src;
}
