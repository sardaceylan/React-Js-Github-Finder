import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
  //   <nav>
  //     <Link to="/">Home</Link> |<Link to="/contact">Contact</Link> |
  //     <Link to="/products">Products</Link> |
  //   </nav>

  <nav>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/contact#email" activeClassName="active">
      {" "}
      | Contact
    </NavLink>
    <NavLink exact to="/products" activeClassName="active">
      {" "}
      | Products
    </NavLink>
    <NavLink to="/products/12?orderby=price" activeClassName="active">
      {" "}
      | Product Details
    </NavLink>
  </nav>
);

const Header = () => (
  <header>
    <h1>My Github Finder App</h1>
  </header>
);

const HomePage = () => (
  <>
    <div>Home Page</div>
  </>
);

const ContactPage = (props) => {
    console.log(props);
    return (
    <>
      <div>Contact Page</div>
    </>
    )  
}

const ProductsPage = () => (
  <>
    <div>Products Page</div>
  </>
);

const ProductDetailsPage = (props) => {
  console.log(props);
  return (
    <>
      <div>Product Details Page</div>
      <div>{props.match.params.id}</div>
    </>
  );
};

const NotFoundPage = () => (
  <>
    <div>NotFound Page</div>
  </>
);

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route exact path="/products/" component={ProductsPage} />
      <Route path="/products/:id" component={ProductDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
