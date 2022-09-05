import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'
import { store } from './Details'

const Home = () => {

    const [detail, setDetail] = useContext(store);
    return (

        <div>
            <div className='Home'>

                <div className="home__container">
                    <div className="home__first">
                    </div>
                    <div className="homefit">
                        <Link to="/fitness" > <h3>FITNESS : -</h3><hr style={{ width: "700px", thickness: "20px" }} /> <br/> <img src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Galleries/10+Fitness+Tips/Muscle-confusion-is-the-only-way-to-go..jpg" alt="not foun" /></Link>

                    </div>
                </div>

                <div className="hometech">
                    <Link to='/technology'> <h3>TECHNOLOGY : -</h3><hr style={{ width: "700px", thickness: "20px" }} /> <br/>   <img src="https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960" alt="not found" /></Link>
                </div>
                <div className="homeholy">
                    <Link to='/hollywood'> <h3>HOLLYWOOD : -</h3><hr style={{ width: "700px", thickness: "20px" }} /> <br/>   <img src="https://wallpapers-base.com/wp-content/uploads/2018/08/high_quality_wallpaper_HD_1080_IDS_1086226.jpg" alt="not found" /></Link>
                </div>

                <h1 style={{ marginTop: "40px" }}>The Latest</h1>
                <hr style={{ width: "350px", thickness: "20px" }} />
                <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "Tollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Articles</h1>

                <h1 className='Top' >Top Posts</h1>
                <hr style={{ width: "200px", thickness: "20px", }} />


                <div className='rightbar2'>
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description}
                                title={n.title}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Home