import React from "react";
import UseTitle from "../../../Hooks/UseTitle";

const Blog = () => {
  UseTitle('Blog')
  return (
    <div className="my-14">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-2xl text-blue-600 font-medium">
          Difference between SQL and NoSQL ?
        </div>
        <div className="collapse-content">
          <div className="">
            <table className="table w-full ml-80 hidden sm:block p-3">
              <thead>
                <tr>
                  <th className="lg:text-2xl">SQL</th>
                  <th className="lg:text-2xl">NOSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-xl">
                    Relational Database Management System
                  </td>
                  <td className="text-xl">
                    Distributed Database Management System
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">Structured Query Language</td>
                  <td className="text-xl">Un-structured Query Language</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">Vertically Scalable</td>
                  <td className="text-xl">Horizontally Scalable</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">
                    Not suitable for hierarchical data storage
                  </td>
                  <td className="text-xl">
                    Best suitable for hierarchical data storage
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">Can be used for complex queries</td>
                  <td className="text-xl">Not good for complex queries</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">Not preferred for Large Datasets</td>
                  <td className="text-xl">
                    Largely preferred for Large Datasets
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-xl block lg:hidden">
                <p>SQl is the Relational Database Management System and NoSQl is the Distributed Database Management System.SQl is the Structured Query Language and NoSQl is the Un-structured Query Language.SQl is the Vertically Scalable and NoSQl is the Horizontally Scalable.SQl is the Not suitable for hierarchical data storage and NoSQl is the Best suitable for hierarchical data storage.SQl can be used for complex queries and NoSQl is the Not good for complex queries.NoSQl is the Not preferred for Large Datasets and NoSQl is the  Largely preferred for Large Datasets</p>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-2xl text-blue-600 font-medium">
          What is JWT, and how does it work ?
        </div>
        <div className="collapse-content w-10/12 mx-auto">
          <div className="text-xl">
            <p>JWT - - JSON WEB Token <br />
            1.Securely transmits information between two parties as a JSON
            object.
            <br />
            2.Digitally Signed.
            <br />
            JWT is mainly used for authorization purpose , not
            authentication.(Authentication means who are you ? Login and
            Password) && (Authorization means what can you do ? Add photo,delete
            photo,view photo)
            <br />
            Without JWT , you can access the protected route.With JWT , you
            can’t access the protected route.</p>
            <br />
            <h2 className="my-2">JWT Works :</h2>
            <h3>
              <p>
                <li>Client login with username and password.</li>
              </p>
              <p>
                <li>Server creates a token for the client.</li>
              </p>
              <p>
                <li>Server sends a token to the client.</li>
              </p>
              <p>
                <li>
                  Client stores the token on either local storage or browser
                  cookie (best HTTP only cookie).
                </li>
              </p>
              <p>
                <li>
                  Next time the client makes a request ,a copy of the token is
                  send to the server for authorization.
                </li>
              </p>
              <p>
                <li>
                  Server verifies the JWT signature before giving the
                  authorization.
                </li>
              </p>
              <p>
                <li>Server responds to the clients request.</li>
              </p>
            </h3>
          </div>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-2xl text-blue-600 font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <div className="">
            <table className="table w-full ml-8 hidden sm:block p-3">
              <thead>
                <tr>
                  <th className="text-2xl">Javascript</th>
                  <th className="text-2xl">NodeJS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-xl">
                    Javascript is a programming language that is used for
                    writing scripts on the website.
                  </td>
                  <td className="text-xl">
                    NodeJS is a Javascript runtime environment.
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">
                    Javascript can only be run in the browsers.
                  </td>
                  <td className="text-xl">
                    We can run Javascript outside the browser with the help of
                    NodeJS.
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">
                    It is basically used on the client-side.
                  </td>
                  <td className="text-xl">
                    It is mostly used on the server-side.
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">
                    Javascript is capable enough to add HTML and play with the
                    DOM.
                  </td>
                  <td className="text-xl">
                    Nodejs does not have capability to add HTML tags.
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">Can be used for complex queries</td>
                  <td className="text-xl">Not good for complex queries</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="text-xl">Not preferred for Large Datasets</td>
                  <td className="text-xl">
                    Largely preferred for Large Datasets
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-xl block lg:hidden">
                <p> Javascript is a programming language that is used for
                    writing scripts on the website and NodeJS is a Javascript runtime environment.Javascript can only be run in the browsers and We can run Javascript outside the browser with the help of
                    NodeJS.Javascript is basically used on the client-side and NodeJS is mostly used on the server-side.Javascript is capable enough to add HTML and play with the
                    DOM and Nodejs does not have capability to add HTML tags.Javascript can be used for complex queries and NodeJS not good for complex queries.Javascript is not preferred for Large Datasets and NodeJS is Largely preferred for Large Datasets.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-2xl text-blue-600 font-medium">
        How does NodeJS handle multiple requests at the same time ? 
        </div>
        <div className="collapse-content w-10/12 mx-auto">
          <p className="text-xl my-3">We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. </p>
          <p className="text-xl my-3">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
