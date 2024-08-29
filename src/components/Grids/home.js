import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function Home() {
    return (

        <>
                {/* Banner de slide 1         */}
                 
                <div id="carousel1" className="carousel slide" style={{paddingTop: '100px', marginBottom: '-50px'}}>
                    <div className="carousel-indicators carousel1-indicators">
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BannerSiteWeb_meias-deadpool.png?mtime=20240826155738&focal=none" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BannerSiteWeb_2x25_sustentacao.png?mtime=20240826155755&focal=none" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BannerSiteWeb_2-Rodeio_2024-08-26-155758_grbz.png?mtime=20240826155759&focal=none" className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BannerSiteWeb_2-Rodeio.png?mtime=20240819140405&focal=none" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    
                </div>

                <button style={{width:'290px', height: '49px', borderRadius: '8px', fontSize: '20px', color: '#f5ebdc', backgroundColor: '#d62300', border: 'none', transform: 'translate(10px, -20px)', left: '50%', top: '50%'}}>Saiba mais</button>
               

                {/* Banner de slide 2 */}
                <div id="carousel2" class="carousel slide" style={{marginBottom: '-50px'}}>
                    <div className="carousel-indicators carousel2-indicators">
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/frango-banner-cardapio-d.jpg?mtime=20210226103541&focal=none" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/acompanhamentos-banner-cardapio-d.jpg?mtime=20210226103906&focal=none" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/sobremesa-banner-cardapio-d.jpg?mtime=20210226103341&focal=none" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <button style={{width:'290px', height: '49px', borderRadius: '8px', fontSize: '20px', color: '#f5ebdc', backgroundColor: '#d62300', border: 'none', transform: 'translate(10px, -20px)', left: '50%', top: '50%'}}>Ver mais</button>
               
                <div className="container-fluid">
                <div className="row border border-dark" style={{backgroundColor: '#D62200'}}>
                    <div className="col-6">
                        <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Mockup_HomeAppClubeBK.png?mtime=20211124095753&focal=none"></img>
                    </div>
                    <div className="col-6">
                        <h2 className="fadeInUp" style={{ fontSize: '75px', paddingTop: '50px', color: '#fff', fontFamily: 'Flame-Regular', textAlign: 'justify' , paddingLeft: '10px'}}>Baixe nosso <br /> App e tenha o <br /> BK na palma da <br /> sua mão!</h2>

                        <div className="row">
                            <div className="col">
                           <a href="https://apps.apple.com/br/app/burger-king-brasil/id1295116265" target='_blank' rel="noopener noreferrer"><img src="https://d3sn2rlrwxy0ce.cloudfront.net/apple_2021-01-12-145551.png?mtime=20210112115552&focal=none" alt="Link para a apple store" style={{height: '70px', marginTop: '25px', paddingLeft: '10px'}}></img></a>
                            </div>

                            <div className="col">
                           <a href="https://play.google.com/store/apps/details?id=burgerking.com.br.appandroid" target='_blank' rel="noopener noreferrer"> <img src="https://d3sn2rlrwxy0ce.cloudfront.net/gplay_2021-01-12-145546.png?mtime=20210112115547&focal=none" alt="Link para o google play" style={{height: '70px', marginTop: '25px', paddingRight: '210px'}}></img> </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

              
               
        
        </>

        
    )
}

export default Home;