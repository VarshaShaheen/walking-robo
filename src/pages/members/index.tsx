import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../../styles/members.css";
import Footer from "../../components/footer/Footer";
import {Button} from "@mui/material";
import Header from "../../components/Header/Header";
import Mentor from "../../components/card/Mentor";
import Card from "../../components/card/Card";
import Table from "../../components/Table/Table";
import {Link} from "react-router-dom";




export default function CenteredTabs() 
{
    const [value, setValue] = React.useState(0);
    const shambu = "https://eoc.trebuchet.one/media/programs/images/WhatsApp_Image_2022-08-09_at_6.17.31_PM.jpeg";
    const rohit = "https://eoc.trebuchet.one/media/programs/images/WhatsApp_Image_2022-08-08_at_9.05.24_PM.jpeg";
    const varsha = "https://eoc.trebuchet.one/media/programs/images/WhatsApp_Image_2022-08-08_at_9.11.47_PM.jpeg";
    const sunith = "https://eoc.trebuchet.one/media/programs/images/profile.jpg";
    const anand = "https://eoc.trebuchet.one/media/programs/images/WhatsApp_Image_2022-06-06_at_8.48.33_PM.jpeg";
    const ziyad = "https://eoc.trebuchet.one/media/programs/images/PXL_20220723_130201739.PORTRAIT-02.jpeg"

    const handleChange = (event: React.SyntheticEvent, newValue: number) => 
{
        setValue(newValue);
    };
    const dummey = "https://eoc.trebuchet.one/media/programs/images/image4.3aaccf30.jpg";

    const TabInfo = () => 
{
        if (value === 0)

            return (
                <>
                    <Mentor name="Prof.Dr Sasi Gopalan" img={dummey} type="Professor and Head" mail="sasigopalan@cusat.ac.in" position="Faculty" branch="Department of Mathematics, CUSAT" />
                    {/*<Mentor name="Dr sasigopalan" img={dummey} type="professor of head" mail="sgcusat@gmail.com" position="Advisory Board" branch="Department of mathematics Cusat" />*/}
                    {/*<Mentor name="Dr sasigopalan" img={dummey} type="professor of head" mail="sgcusat@gmail.com" position="Faculty" branch="Department of mathematics Cusat" />*/}
                </>
            );

        else if (value === 1)

            return (
                <>
                    <div className="head mt">
                        <h6>Phd Students</h6>
                        <span className="divider"></span>
                    </div>
                    <div className="car mt">
                        <Card img={shambu} alt="img" info="Research Scholar Dept Of Mathematics" name="Sambu Raj" />
                    </div>
                    <div className="head mt">
                        <h6>UnderGraduate students</h6>
                        <span className="divider"></span>
                    </div>
                    <div className="car mt">
                        <Card img={rohit} alt="college" info="Btech CSE, SOE CUSAT" name="Rohit T P" />
                        <Card img={varsha} alt="college" info="Btech CSE, SOE CUSAT" name="Varsha Shaheen" />
                        <Card img={sunith} alt="college" info="Btech CSE, SOE CUSAT" name="Sunith V S" />
                        <Card img={anand} alt="college" info="Btech CSE, SOE CUSAT" name="Anand K Vinu" />
                        <Card img={ziyad} alt="college" info="Btech CSE, SOE CUSAT" name="Ziyad Kadekkara" />
                    </div>
                    <div className="head mt">
                        <h6>Masters Students</h6>
                        <span className="divider"></span>
                    </div>
                    {/*<div className="car mt">*/}
                    {/*    <Card img={URL} alt="college" info="amazing and cool college i recomend you guys to come here and study" />*/}
                    {/*    <Card img={URL} alt="college" info="amazing and cool college i recomend you guys to come here and study" />*/}
                    {/*    <Card img={URL} alt="college" info="amazing and cool college i recomend you guys to come here and study" />*/}
                    {/*</div>*/}
                </>

            );
        else if (value === 2)
            return (
                <Table />
            );


        return null;
    };

    return (
        <>
            <Header />
            <div className="main">
                <div className="end">
                    <Link to={"/login"}>
                    <Button variant="contained" className="btnpink">Join Now</Button>
                    </Link>
                </div>
                <div className="head">
                    <h1>Members</h1>
                    <span className="divider"/>
                </div>
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <Tabs value={value} onChange={handleChange} centered indicatorColor="primary">
                        <Tab label="Mentors" />
                        <Tab label="Current Mentors" />
                        <Tab label="Alumnis" />
                    </Tabs>
                    <TabInfo />
                </Box>
            </div>
            <Footer />
        </>
    );
}


