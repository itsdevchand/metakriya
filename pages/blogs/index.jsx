import React from "react";
import cls from "classnames";
import { BlogCard, FeatureBlogCard } from "../../components/blog";
import s from "../../styles/Blogs.module.scss";
import { Pagination } from "../../components/ui";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className={cls(s.blogs)}>
      <div className={cls("container")}>
        {/* blog top */}
        <div className={cls("mb-3", s.blogsTop)}>
          <div className={cls("py-3 mb-5", s.blogHeading)}>Feature Blog</div>
          <FeatureBlogCard />
        </div>

        {/* blog bottom section */}
        <div className={cls("my-5", s.blogsBtm)}>
          {/* blog bottom  */}
          <div className={cls("py-3 mb-5", s.blogHeading)}>Latest Blogs</div>
          <div className={s.blogBtmDesc}>
            <div
              className={cls(
                "row gy-4 row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1"
              )}
            >
              <div className={cls("col")}>
                <div className={cls("br-light bs-light", s.blogBtmTab)}>
                  <Link href="./blogs/blog-content">
                    <a>
                      <BlogCard />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={cls("col")}>
                <div className={cls("br-light bs-light", s.blogBtmTab)}>
                  <Link href="./blogs/blog-content">
                    <a>
                      <BlogCard />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={cls("col")}>
                <div className={cls("br-light bs-light", s.blogBtmTab)}>
                  <Link href="./blogs/blog-content">
                    <a>
                      <BlogCard />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={cls("col")}>
                <div className={cls("br-light bs-light", s.blogBtmTab)}>
                  <Link href="./blogs/blog-content">
                    <a>
                      <BlogCard />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={cls("col")}>
                <div className={cls("br-light bs-light", s.blogBtmTab)}>
                  <Link href="./blogs/blog-content">
                    <a>
                      <BlogCard />
                    </a>
                  </Link>
                </div>
              </div>
              <div className={cls("col")}>
                <div className={cls("br-light bs-light", s.blogBtmTab)}>
                  <Link href="./blogs/blog-content">
                    <a>
                      <BlogCard />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pagination section */}
        <div className={cls(s.Pangination)}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
