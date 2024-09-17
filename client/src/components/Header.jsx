import { Button, Navbar, TextInput, Dropdown, Avatar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
    const path = useLocation().pathname;
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <Navbar className="border-b-2">
            <Link
                to="/"
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
                <span className="px-2 py-1 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400 rounded-lg text-white">
                    Home
                </span>
            </Link>
            <form action="">
                <TextInput
                    type="text"
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>
            <Button
                className="w-12 h-10 lg:hidden md:order-2"
                color="gray"
                pill
            >
                <AiOutlineSearch />
            </Button>

            <div className="flex gap-2 md:order-2">
                <Button
                    className="w-12 h-10 hidden sm:inline"
                    color="gray"
                    pill
                    onClick={() => dispatch(toggleTheme())}
                >
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </Button>
                {currentUser ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="user"
                                img={currentUser.profilePicture}
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {currentUser.username}
                            </span>
                            <span className="block text-sm font-medium truncate">
                                {currentUser.email}
                            </span>
                        </Dropdown.Header>
                        <Link to={"/dashboard?tab=profile"}>
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            onClick={() => firebase.auth().signOut()}
                        >
                            Sign Out
                        </Dropdown.Item>
                    </Dropdown>
                ) : (
                    <Link to="/sign-in">
                        <Button gradientDuoTone="purpleToBlue" outline>
                            Sign-in
                        </Button>
                    </Link>
                )}

                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active={path == "/"} as={"div"}>
                    <Link to="/">Home</Link>
                </Navbar.Link>

                <Navbar.Link active={path == "/about"} as={"div"}>
                    <Link to="/about">About</Link>
                </Navbar.Link>

                <Navbar.Link active={path == "/projects"} as={"div"}>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
