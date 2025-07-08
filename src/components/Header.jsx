import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {

    function renderProfileMenu() {
        // const { user, getUserAccount, logoutUser } = useContext(AuthContext);

        let user = {
            username: "timur"
        }
        user = false;

        // useEffect(() => {
        //     getUserAccount();
        //     // eslint-disable-next-line
        // }, []);

        const handleSearch = (e) => {
            e.preventDefault();
            // if (searchQuery.trim()) {
            //     setIsLoading(true);
            //     navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
            //     setSearchQuery('');
            //     setIsLoading(false);
            // }
        };

        const handleLogout = async () => {
            // // setIsLoading(true);
            // try {
            //     await logoutUser();
            // } finally {
            //     // setIsLoading(false);
            // }
        };

        if (user) {
            return (
                <div className="profileMenu mx-3 d-flex align-items-center gap-2">
                    <Link to="/cart">
                        <i className="bi bi-cart3 fs-3 mx-3"></i>
                    </Link>
                    <Link to="/profile">
                        <i className="bi bi-person-circle fs-2"></i>
                    </Link>
                    <span className="username">{user.username}</span>
                    <button
                        className="logoutBtn btn btn-danger"
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </div>
            );
        } else {
            return (
                <div className="profileMenu mx-3 d-flex align-items-center gap-2">
                    <Link className="bg-danger text-light p-2 rounded" to="/login">
                        Log in
                    </Link>
                </div>
            );
        }
    }

    return (
        <header className="header">
            <div className="text-light bg-black">
                <p className="text-center p-3">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link className="fw-bold mx-2" to={"/shop"}>Shop now</Link>
                </p>
            </div>
            <Navbar expand="lg" className="container">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to={"/"}>E-commerce</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex align-items-center gap-2"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to={'/'}>Home</Link>
                            <Link to={'/contact'}>Contact</Link>
                            <Link to={'/about'}>About</Link>
                            <Link to={'/register'}>Sign up</Link>
                            <Link to={'/shop'} className="btn btn-danger">Shop</Link>
                        </Nav>
                        <Form className="d-flex"
                        //  onSubmit={handleSearch}
                        >
                            <Form.Control
                                type="search"
                                placeholder="What are you looking for?"
                                className="me-2"
                            // aria-label="Search"
                            // value={searchQuery}
                            // onChange={(e) => setSearchQuery(e.target.value)}
                            // disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                variant="outline-danger"
                            // disabled={isLoading || !searchQuery.trim()}
                            >
                                {/* {isLoading ? <Spinner animation="border" size="sm" /> : <i className="bi bi-search"></i>} */}
                                <i className="bi bi-search"></i>
                                Search
                            </Button>
                        </Form>
                        {renderProfileMenu()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}