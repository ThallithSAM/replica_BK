
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './cardapio.css';

function Cardapio() {
    return (
        <>

            <div id="carouselC" className="carousel slide" style={{ paddingTop: '120px' }}>
                <div className="carousel-indicators carouselC-indicators">
                    <button type="button" data-bs-target="#carouselC" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselC" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselC" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselC" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://d3sn2rlrwxy0ce.cloudfront.net/carne-banner-cardapio2-d.jpg?mtime=20210226103612&focal=none" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://d3sn2rlrwxy0ce.cloudfront.net/frango-banner-cardapio-d.jpg?mtime=20210226103541&focal=none" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://d3sn2rlrwxy0ce.cloudfront.net/sobremesa-banner-cardapio-d.jpg?mtime=20210226103341&focal=none" className="d-block w-100" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src="https://d3sn2rlrwxy0ce.cloudfront.net/acompanhamentos-banner-cardapio-d.jpg?mtime=20210226103906&focal=none" alt="..." />
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



            <div>
                <h1 style={{ paddingRight: '80%', paddingTop: '250px' }}>Cardápio</h1>
            </div>
            {/* Sanduiches especiais */}
            <h2 className="titleB">Sanduíches Especiais</h2>
            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2 pt-5" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/The-King_King-Costela_Externa_Novo.png?mtime=20240620132633&focal=none" alt="King Costela"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>King Costela</h6>
                        </div>
                    </div>




                    <div className="col-2 pt-5" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/whopper-catupiry-thumb-novo.png?mtime=20240206234258&focal=none" alt="Whopper Bacon Catupiry"
                                style={{ height: '290px', paddingBottom: '90px', paddingTop: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Whopper&reg; Bacon Catupiry&reg; </h6>
                        </div>

                    </div>




                    <div className="col-2 pt-5" style={{ width: '350px', height: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Whopper-Rodeio.png?mtime=20230731182625&focal=none" alt="Whopper Rodeio"
                                style={{ height: '290px', paddingBottom: '70px', paddingTop: '10px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Whopper&reg; Rodeio</h6>

                        </div>

                    </div>


                    <div className="col-2 pt-5" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/whopper-bbq-bacon-thumb_2021-09-16-133011_rnpl.png?mtime=20210916133012&focal=none" alt="Whopper Barbecue Bacon"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Whopper&reg; Barbecue Bacon</h6>

                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid">



                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/whopper-duplo-thumb.png?mtime=20210916131816&focal=none" alt="Whopper Duplo"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Whopper&reg; Duplo</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Whopper-Furioso.png?mtime=20230731182816&focal=none" alt="Whopper Furioso"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Whopper&reg; Furioso</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/maga-stacker-cheddar-2-thumb.png?mtime=20210916134008&focal=none" alt="Mega Stacker Cheddar 2.0"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Mega Stacker Cheddar 2.0</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/maga-stacker-atomico-2-thumb.png?mtime=20210916133613&focal=none" alt="Mega Stacker Atomico 2.0"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Mega Stacker Atômico 2.0</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/maga-stacker-2-thumb.png?mtime=20210916133150&focal=none" alt="Mega Stacker 2.0"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Mega Stacker 2.0</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Mega-Stacker-cheddar-3.0-thumb-cupom-m-d_2022-07-21-170304_esmv.png?mtime=20220721170304&focal=none" alt="Mega Stacker Cheddar 3.0"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Mega Stacker Cheddar 3.0</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Mega-Stacker-3.0-thumb-cupom-m-d_2022-07-21-165917_cczx.png?mtime=20220721165917&focal=none" alt="Mega Stacker 3.0"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Mega Stacker 3.0</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Mega-Stacker-atomico-3.0-thumb-cupom-m-d_2022-07-21-170135_cnnj.png?mtime=20220721170136&focal=none" alt="Mega Stacker Atomico 3.0"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Mega Stacker Atômico 3.0</h6>

                        </div>
                    </div>
                </div>
            </div>




            {/* Segunda caixa */}
            <h2 className="titleB" style={{ marginTop: '50px' }}>Sanduíches de Carne</h2>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/whopper-thumb.png?mtime=20210916125149&focal=none" alt="Whopper"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Whopper&reg;</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/cheddar_dp_crispy.png?mtime=20231129102105&focal=none" alt="Cheddar Duplo"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Cheddar Duplo</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Stacker_Duplo_Bacon-thumb-cupom-m-d.png?mtime=20220825142918&focal=none" alt="Stacker Duplo Bacon"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Stacker Duplo Bacon</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/rodeio-duplo-thumb_2021-09-16-135740_wani.png?mtime=20210916135741&focal=none" alt="Rodeio Duplo"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Rodeio Duplo</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BK-Original-Cheddar.png?mtime=20230628090746&focal=none" alt="BK Cheddar"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Bk&reg; Cheddar</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/big-king-thumb.png?mtime=20210916134350&focal=none" alt="Big King"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Big King&trade;</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Cheeseburger_duplo-thumb.png?mtime=20230202110227&focal=none" alt="Cheeseburger Duplo"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Cheeseburger Duplo</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BK-Original-thumb-cupom-m-d.png?mtime=20220706091451&focal=none" alt="BK Original"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> BK&reg; Original</h6>

                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/cheeseburger-thumb.png?mtime=20210916134524&focal=none" alt="Cheeseburger"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Cheeseburger</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Rodeio-thumb.png?mtime=20230125075347&focal=none" alt="Rodeio"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Rodeio</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/whopper_jr.png?mtime=20231010141029&focal=none" alt="Whopper Jr."
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Whopper&reg; Jr.</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/whopper_jr_duplo.png?mtime=20231010141120&focal=none" alt="Whopper Jr. Duplo"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Whopper&reg; Jr. Duplo</h6>

                        </div>
                    </div>
                </div>
            </div>


            {/* Terceira caixa */}

            <h2 titleB style={{ paddingRight: '60%', marginTop: '50px', marginBottom: '35px' }}>Sanduíches de Frango e Vegetarianos</h2>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Chicken-Jr.png?mtime=20230703115830&focal=none" alt="Chicken Júnior"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Chicken Júnior</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&focal=none" alt="Chicken Duplo"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Chicken Duplo</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BK-Chicken-Crispy-thumb.png?mtime=20230125075508&focal=none" alt="BK Chicken Crispy"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> BK&reg; Chicken Crispy</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/CBK-thumb-cupom-m-d-1.png?mtime=20221129151428&focal=none" alt="CBK"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>CBK</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/whopper-de-plantas-thumb.png?mtime=20210916144441&focal=none" alt="Whopper Vegetariano"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Whopper&reg; Vegetariano</h6>

                        </div>
                    </div>
                </div>
            </div>


            {/* Quarta caixa */}


            <h2 titleB style={{ marginBottom: '30px', paddingRight: '85%', paddingTop: '15px' }}>Kids</h2>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/kids-burger-thumb.png?mtime=20210916101534&focal=none" alt="Kids Burger"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Kids Burger</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/kids-burger-thumb-cupom-m-d.png?mtime=20220721170810&focal=none" alt="Combo King Jr"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Combo King Jr.&trade;</h6>

                        </div>

                    </div>
                </div>
            </div>



            {/* Quinta caixa */}
            <h2 titleB style={{ marginTop: '50px', paddingRight: '75%', marginBottom: '30px' }}>Acompanhamentos</h2>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/batata-catupiry-thumb-novo.png?mtime=20240401171014&focal=none" alt="Batata Suprema Catupiry"
                                style={{ height: '200px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Batata Suprema Catupiry&reg;</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Frita-thumb.png?mtime=20210916164008&focal=none" alt="Batata Frita"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Batata Frita</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Balde_de_Batata.png?mtime=20231129125700&focal=none" alt="Balde de Batata"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Balde de Batata</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Suprema-thumb_2021-09-16-164200_tqnf.png?mtime=20210916164201&focal=none" alt="Batata Suprema"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Batata Suprema</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Batata-Furiosa-thumb_2021-09-16-164453_owas.png?mtime=20210916164455&focal=none" alt="Batata Furiosa"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Batata Furiosa</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Onion-Rings-thumb_2021-09-16-164850_zyvn.png?mtime=20210916164851&focal=none"alt="Onion Rings"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Onion Rings</h6>

                        </div>

                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BK-Chicken-2.png?mtime=20221202153255&focal=none" alt="BK Chicken"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>BK&reg; Chicken</h6>

                        </div>

                    </div>


                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Trio-Supremo-2.png?mtime=20221202145812&focal=none" alt="Trio Supremo"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Trio Supremo</h6>

                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Trio-furioso-thumb.png?mtime=20230314144340&focal=none" alt="Trio Furioso"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Trio Furioso</h6>

                        </div>
                    </div>




                    <div className="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Maionese-Temperada.png?mtime=20240103180712&focal=none" alt="Sachê de Maionese Temperada"
                                style={{ height: '250px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Sachê de Maionese Temperada</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Maionese_2024-01-03-180349_nxlz.png?mtime=20240103180350&focal=none" alt="Sachê de Maionese"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Sachê de Maionese</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Baconese.png?mtime=20240103180544&focal=none" alt="Sachê de Baconese"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Sachê de Baconese</h6>



                        </div>

                    </div>

                </div>

            </div>



            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Blister-BBQ-thumb-cupom-m-d.png?mtime=20220722130850&focal=none" alt="Molho Barbecue"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Molho Barbecue</h6>

                        </div>
                    </div>

                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Blister-Furioso-thumb-cupom-m-d_2022-07-22-131828_qoeg.png?mtime=20220722131829&focal=none" alt="Molho furioso"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Molho furioso</h6>

                        </div>
                    </div>
                </div>
            </div>



            {/* Sexta caixa */}

            <h2 titleB style={{ marginTop: '50px', paddingRight: '80%', marginBottom: '30px' }}>Sobremesas</h2>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/ShakeFeitoComNutella_Thumb_Sem-tag.png?mtime=20240429114019&focal=none" alt="Shake Feito com Creme de Avelã"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Shake Feito com Creme de Avelã</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BK-Mix-Nutella-thumb-cupom-m-d.png?mtime=20230124192744&focal=none" alt="BK Mix com Nutella"
                                style={{ height: '290px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>BK&reg; Mix com Nutella&reg;</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Recheada-Nutella-thumb-cupom-m-d.png?mtime=20230124193651&focal=none" alt="Casquinha Recheada com Nutella"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Casquinha Recheada com Nutella&reg;</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Brownie-Chocolate-thumb_2021-09-16-112352_jrdr.png?mtime=20210916112353&focal=none" alt="Brownie com Brigadeiro de Chocolate"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Brownie com Brigadeiro de Chocolate</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Balde-Ovomaltine_Externa.png?mtime=20240604170351&focal=none" alt="Balde de Ovomaltine"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Balde de Ovomaltine&reg;</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Balde-Brownie_Externa.png?mtime=20240604170533&focal=none"alt="Balde de Brownie"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Balde de Brownie</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BK-Mix-Brownie-thumb.png?mtime=20210916161110&focal=none" alt="BK Mix de Brownie"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> BK&reg; Mix de Brownie</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/BK-Mix-Ovomaltine-thumb.png?mtime=20210916160844&focal=none" alt="BK Mix de Ovomaltine"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>BK&reg; Mix de Ovomaltine</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Doce-de-Leite_Externa.png?mtime=20240604103731&focal=none" alt=" Shake de Doce de Leite"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Shake de Doce de Leite</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Baunilha_Externa.png?mtime=20240604103843&focal=none" alt="Shake de Baunilha"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Shake de Baunilha</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Chocolate_Externa.png?mtime=20240604104016&focal=none" alt="Shake de Chocolate"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Shake de Chocolate</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Morango_Externa.png?mtime=20240604104134&focal=none"alt="Batata Suprema"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Shake de Morango</h6>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Crocante_Externa.png?mtime=20240604104312&focal=none" alt="Shake Crocante"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Shake Crocante</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Brownie_Externa.png?mtime=20240604103428&focal=none" alt="Shake de Brownie"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Shake de Brownie</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Tag-Ovomaltine_Sundae_Externa.png?mtime=20240610165317&focal=none" alt="Sundae de Ovomaltine"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Sundae de Ovomaltine</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Sundae-Chocolate-thumb.png?mtime=20210916155926&focal=none" alt="Sundae de Chocolate"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Sundae de Chocolate</h6>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Sundae-Doce-de-Leite-thumb.png?mtime=20210916155730&focal=none" alt="Sundae de Doce de Leite"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Sundae de Doce de Leite</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Sundae-Morango-thumb.png?mtime=20210916160333&focal=none" alt="Batata Frita"
                                style={{ height: '230px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Sundae de Morango</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Baunilha-thumb.png?mtime=20210916162214&focal=none" alt="Casquinha de Baunilha"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Casquinha de Baunilha</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Mista-thumb.png?mtime=20210916162351&focal=none" alt="Casquinha Mista"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Casquinha Mista</h6>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Doce-de-Leite-thumb.png?mtime=20210916162028&focal=none" alt="Casquinha de Doce de Leite"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Casquinha de Doce de Leite</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Recheada-Doce-de-Leite-thumb.png?mtime=20210916161704&focal=none" alt="Casquinha Recheada de Doce de Leite"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Casquinha Recheada de Doce de Leite</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Casquinha-Recheda-Ovomaltine-thumb.png?mtime=20210916161328&focal=none" alt="Casquinha Recheada de Ovomaltine"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Casquinha Recheada de Ovomaltine&reg;</h6>

                        </div>

                    </div>
                </div>
            </div>




            {/* Sétima caixa */}


            <h2 titleB style={{ marginTop: '50px', paddingRight: '80%', marginBottom: '30px' }}>Bebidas</h2>

            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Natural_One_Laranja_thumb_639x324.png?mtime=20210118103439&focal=none" alt="Suco Natural One Laranja"
                                style={{ height: '200px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Suco Natural One&reg; Laranja</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Natural_One_Uva_thumb_639x324.png?mtime=20210119185115&focal=none" alt="Suco Natural One Uva"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Suco Natural One&reg; Uva</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/natural-one-maracuja-thumb_2021-02-24-143713.png?mtime=20210224113714&focal=none" alt="Suco Natural One Maracuja"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Suco Natural One&reg; Maracujá</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Pepsi-thumb_2021-09-20-103453_kyav.png?mtime=20210920103454&focal=none" alt="Pepsi"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Pepsi&reg;</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Pepsi-Twist-thumb.png?mtime=20210918000616&focal=none" alt="Pepsi Twist"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Pepsi&reg; Twist</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Pepsi-Black-thumb.png?mtime=20210918000732&focal=none" alt="Pepsi Black"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Pepsi&reg; Black</h6>

                        </div>

                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Guarana-thumb_2021-09-20-103342_wuyd.png?mtime=20210920103343&focal=none" alt="Guarana Antarctica"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> Guaraná Antárctica&reg;</h6>

                        </div>

                    </div>


                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/Guarana-Zero_500x264.png?mtime=20231221180021&focal=none" alt="Guarana Antarctica Zero"
                                style={{ height: '200px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Guaraná Antárctica&reg; Zero</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">

                <div className="row" style={{ marginBottom: '15px', paddingLeft: '25px' }}>
                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/H2O_limao_thumb_639x324-100k.png?mtime=20201222080044&focal=none" alt="H2OH Limao"
                                style={{ height: '220px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}> H2OH!&reg; Limão</h6>

                        </div>
                    </div>




                    <div class="col-2" style={{ width: '350px' }}>
                        <div className="border border-dark "
                            style={{ height: '220px', width: '100%', borderRadius: '2px', backgroundColor: '#f2e5d4' }}>
                            <img src="https://d3sn2rlrwxy0ce.cloudfront.net/agua-copo-thumb-cupom-m-d.png?mtime=20220722134022&focal=none" alt="Água de Copo"
                                style={{ height: '250px', paddingBottom: '30px' }}></img>
                        </div>

                        <div className="border border-dark" style={{ borderRadius: '2px' }}>
                            <h6 style={{ color: '#502314' }}>Água de Copo</h6>

                        </div>

                    </div>

                </div>
            </div>



            {/* nona caixa */}
            <img src="https://www.burgerking.com.br/images/tabela-nutricional-banner-cardapio-d.jpg" alt="Tabela nutricional"
                style={{ height: '450px', width: '100%', marginBottom: '-50px' }}></img>

            <button style={{ width: '300px', height: '49px', borderRadius: '8px', fontSize: '20px', color: '#f5ebdc', backgroundColor: '#d62300', border: 'none', transform: 'translate(-50px, -20px)', left: '50%', top: '50%' }}>Ver tabela</button>
        </>
    )
}

export default Cardapio;