function Footer() {
    return(
        <footer style={{backgroundColor: '#502314', color: '#fff', padding: '50px'}}>

            <img src="https://www.burgerking.com.br/images/bklogos/BK-novo-logo-eggwhite.svg" style={{height: '90px', paddingBottom: '15px'}}></img>

           <div className="row" style={{paddingBottom: '15px', fontSize: '20px', color: '#f5ebdc', justifyContent: 'center'}}>
            <div className="col-auto">App BK</div>
            <div className="col-auto">Sobre BK</div>
            <div className="col-auto">Trabalhe conosco</div>
            <div className="col-auto">Seja um franqueado</div>
            <div className="col-auto">Relações com investidores</div>
        
           </div>

           <div className="row" style={{color: '#f5ebdc', paddingBottom: '25px', fontSize: '17px', justifyContent: 'center'}}>
            <div className="col-auto">Diretrizes de Privacidade de Dados</div>
            <div className="col-auto">Regulamento do Clube BK</div>
            <div className="col-auto">Política de Publicidade Infantil</div>
            <div className="col-auto">Informações Legais</div>
            <div className="col-auto">Opções de Privacidade</div>
        
           </div>

           <hr/>

           <p style={{color: '#f5ebdc', fontSize: '20px'}}>Compartilhe algo gostoso</p>
           <div className="row" style={{justifyContent: 'center'}}>
            <div className="col-1" style={{marginRight: '-70px'}}><img src="https://d3sn2rlrwxy0ce.cloudfront.net/instagram.png?mtime=20210201115615&focal=none" alt="Instagram" style={{height: '30px'}}></img></div>
            <div className="col-1" style={{marginRight: '-70px'}}><img src="https://d3sn2rlrwxy0ce.cloudfront.net/twitter.png?mtime=20210201115615&focal=none" alt="Twitter" style={{height: '30px'}}></img></div>
            <div className="col-1"><img src="https://d3sn2rlrwxy0ce.cloudfront.net/facebook.png?mtime=20210201115614&focal=none" alt="Facebook" style={{height: '30px'}}></img></div>
           </div>
           <p style={{color: '#f5ebdc', paddingTop: '25px'}}>Imagens meramente ilustrativas. Consulte os restaurantes participantes. TM & &copy; 2021 Burger King Corporation. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;