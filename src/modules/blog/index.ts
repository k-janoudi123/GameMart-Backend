import BlogModuleService from "./service";
import { Module } from "@medusajs/framework/utils";
import blogLoader from "./loaders/blog";
export const BLOG_MODULE = "blog";

export default Module(BLOG_MODULE, {
  service: BlogModuleService,
  loaders: [blogLoader],
});
