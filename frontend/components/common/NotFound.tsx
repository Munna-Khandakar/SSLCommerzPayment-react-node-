import React from "react";

export default function NotFound() {
    return (
        <section className="section is-medium py-6">
            <div className="container">
                <div className="is-centered">
                    <figure className="image">
                        <img className="h-[240px] w-auto mx-auto"
                            src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" />
                    </figure>
                    <div className="text-center">
                        <h1 className="title mb-5">404 Page Not Found</h1>
                        <div className="buttons is-centered">
                            <a href="/skills" className="button is-info">
                                <span className="icon icomoon icon-left"> </span>
                                <span>
                                    Get all courses
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
