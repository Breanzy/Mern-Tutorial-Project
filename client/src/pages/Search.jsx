import { TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
    const [sideBarData, setSideBarData] = useState({
        searchTerm: "",
        sort: "desce",
        category: "uncategorized",
    });
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get("searchTerm");
        const sortFromUrl = urlParams.get("sort");
        const categoryFromUrl = urlParams.get("category");
        if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
            setSideBarData({
                ...sideBarData,
                searchTerm: searchTermFromUrl,
                sort: sortFromUrl,
                category: categoryFromUrl,
            });
        }
        const fetchPosts = async () => {
            setLoading(true);
            const searchQuery = urlParams.toString();
            const res = await fetch(`api/post/getposts?${searchQuery}`);
            if (!res.ok) {
                setLoading(false);
                return;
            }
            if (res.ok) {
                setPosts(data.posts);
                setLoading(false);
                if (data.posts.length === 9) {
                    setShowMore(true);
                } else {
                    setShowMore(false);
                }
            }
        };
        fetchPosts();
    }, [location.search]);

    const handleChange = async (e) => {
        if(e.target.id === 'searchTerm'){
            
        }
    }

    return (
        <div>
            <div className="">
                <form>
                    <div className="">
                        <label htmlFor="">Search Term:</label>
                        <TextInput
                            placeholder="Search..."
                            id="searchTerm"
                            type="text"
                            value={sideBarData.searchTerm}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
