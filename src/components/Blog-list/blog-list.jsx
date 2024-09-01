/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/blog');
        setBlogs(response.data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {currentBlogs.map((blogItem, index) => (
                <div
                  className="item mb-80 wow fadeInUp"
                  key={blogItem.id}
                  data-wow-delay=".3s"
                >
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src={blogItem.img} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            {/* Date can be displayed here if needed */}
                          </div>
                          <h5>
                            <Link href={blogItem.url}>
                              <a>{blogItem.title}</a>
                            </Link>
                          </h5>
                          <p className="mt-10">
                            {blogItem.subtitle}
                          </p>
                          <div className="btn-more mt-30">
                            <Link href={blogItem.url}>
                              <a target="_blank" className="simple-btn">Devamını Oku</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pagination">
                {[...Array(totalPages)].map((_, pageIndex) => (
                  <span key={pageIndex} className={currentPage === pageIndex + 1 ? "active" : ""}>
                    <a onClick={() => paginate(pageIndex + 1)} style={{ cursor: "pointer" }}>
                      {pageIndex + 1}
                    </a>
                  </span>
                ))}
                {currentPage < totalPages && (
                  <span>
                    <a onClick={() => paginate(currentPage + 1)} style={{ cursor: "pointer" }}>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
