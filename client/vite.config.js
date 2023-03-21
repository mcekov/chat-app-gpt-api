import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * @param match
 * Regular expression in string or Regexp type,
 *  or a match predicate  (this: vite transform context, code: string, id: file name string) => void
 * @returns transformed code
 */
import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), requireTransform({})],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  
});

// check the vite-plugin-require-transform params'type 
export type VitePluginRequireTransformParamsType = {
	//filter files that should enter the plugin
	fileRegex?: RegExp = /.ts$|.tsx$/ ,
	//prefix that would plugin into the requireSpecifier 
	importPrefix? = '_vite_plugin_require_transform_': string,
	//to deal with the requireSpecifier
	importPathHandler?: Function
}
