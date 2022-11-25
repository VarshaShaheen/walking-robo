import "./blog.css";

import {useParams} from "react-router-dom";
import {BlogObject, Blogs, EventObject, Events} from "../../api/model";
import {LegacyRef, useEffect, useRef, useState} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";

export default function Blog(event?: boolean)
{

    const {id} = useParams();
    const rootRef = useRef<HTMLDivElement>();

    const [blog, setBlog] = useState<BlogObject>();
    const [events, setEvent] = useState<EventObject>();

    useEffect(() =>
    {
        if (id)
        {
            if (!event)
            {
                Blogs.get(id).then((blog) => setBlog(blog as BlogObject));
            }
            else
            {
                Events.get(id).then((events) => setEvent(events as EventObject));
            }
        }

    }, []);

    useEffect(() =>
    {

        if (rootRef.current)
        {
            rootRef.current.innerHTML =event?events?.html || "loading": blog?.html || "Loading...";
        }

    }, [blog, rootRef]);

    return (
        <>
            <Header/>
            <div ref={rootRef as LegacyRef<HTMLDivElement>} className="blog"/>
            <Footer/>
        </>);
}
