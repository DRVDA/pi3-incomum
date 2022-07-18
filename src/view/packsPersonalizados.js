import "../css/style.css";
import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../component/Navbar";


/*Images*/
import logotipoincommun from "../images/logotipoincommun.png";


export default function packsPersonalizados() {
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  const [campDataPreenchimento, setcampDataPreenchimento] = useState({today});

  const [campNomeMarca, setcampNomeMarca] = useState("");
  const [campEmail, setcampEmail] = useState("");

  const [campMDRedesSociais, setcampMDRedesSociais] = useState("");
  const [campMDPublicacoesPorSemana, setcampMDPublicacoesPorSemana] = useState(0);
  const [campMDStoriesPorSemana, setcampMDStoriesPorSemana] = useState(0);
  const [campMDRellsPorSemana, setcampMDRellsPorSemana] = useState(0);
  const[campMDDesign, setcampMDDesign] = useState(false);
  const[campMDCapaPorMes, setcampMDCapaPorMes] = useState(0);
  const[campMDCopywriting, setcampMDCopywriting] = useState(false);
  const[campMDPlanificaçãoEditorial, setcampMDPlanificaçãoEditorial] = useState(false);
  const[campMDTempoConsultoriaDigitalPorSemana, setcampMDTempoConsultoriaDigitalPorSemana] = useState(0);
  const[campMDGestaoCampanhas, setcampMDGestaoCampanhas] = useState(false);
  const[campMDRelatorioMensal, setcampMDRelatorioMensal] = useState(false);
  const[campMDPublicidadePaga, setcampMDPublicidadePaga] = useState(false);  
  const[campMDEmailMarketing, setcampMDEmailMarketing] = useState(false);
  const[campMDOtimizaçãoSEO, setcampMDOtimizaçãoSEO] = useState(false);

  const[campDGAnaliseConcorrencia, setcampDGAnaliseConcorrencia] = useState(false);
  const[campDGLogotipo, setcampDGLogotipo] = useState(false);
  const[campDGPaletaCores, setcampDGPaletaCores] = useState(false);  
  const[campDGSlogan, setcampDGSlogan] = useState(false);
  const[campDGManualNormasGraficas, setcampDGManualNormasGraficas] = useState(false);
  const[campDGEstacionario, setcampDGEstacionario] = useState(false);  
  const[campDGBrandingRebranding, setcampDGBrandingRebranding] = useState(false);
  const[campDGEstrategiaMarca, setcampDGEstrategiaMarca] = useState(false);
  const[campDGRegistoMarcaDesignEditorial, setcampDGRegistoMarcaDesignEditorial] = useState(false);  

  const[campWLOSIWebsiteOnePage, setcampWLOSIWebsiteOnePage] = useState("");
  const[campWLOSILimitePaginas, setcampWLOSILimitePaginas] = useState(0);
  const[campWLOSIPortfolio, setcampWLOSIPortfolio] = useState(false);
  const[campWLOSIConteudosTextuais, setcampWLOSIConteudosTextuais] = useState(false);
  const[campWLOSIAlojamento, setcampWLOSIAlojamento] = useState(false);
  const[campWLOSIDominio, setcampWLOSIDominio] = useState(false);

  const[campWLOLOLimitePaginas, setcampWLOLOLimitePaginas] = useState(false);
  const[campWLOLOPaginasPretende, setcampWLOLOPaginasPretende] = useState(0);
  const[campWLOLOIntegracao, setcampWLOLOIntegracao] = useState(false);
  const[campWLOLOConteudosTextuais, setcampWLOLOConteudosTextuais] = useState(false);
  const[campWLOLOAlojamento, setcampWLOLOAlojamento] = useState(false);
  const[campWLOLODominio, setcampWLOLODominio] = useState(false);  

  const[campCCComunicacaoEConsultoria, setcampCCComunicacaoEConsultoria] = useState(false);
  const[campCCConsultoriaDeMarketingComunicacao, setcampCCConsultoriaDeMarketingComunicacao] = useState(false);
  const[campCCOrganizacaoDeEventos, setcampCCOrganizacaoDeEventos] = useState(false);
  const[campCCAssessoriaECriaçãoDeConteudo, setcampCCAssessoriaECriaçãoDeConteudo] = useState(false);
    return (
      <div className="wrapper ">
      <Navbar/>


        

        <div className="bg-amarelo py-5" >
          <div className="container-fluid">
            <div className="row mt-5">
              <h1 className="py-5 mt-5 display-3 text-center text-light">
                <b>O que pretende em específico?</b>
              </h1>
            </div>
          </div>
        </div>


        <div className="container mt-5">
        <form className="justify-content-md-center">
            <h3 className="mt-4">
                <b>Informação da empresa</b>
            </h3>
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_storiessemana">Nome da marca</label>
                <input type="text" className="form-control" id="nome_marca" placeholder="!ncommun" value={campNomeMarca} onChange={(value) => setcampNomeMarca(value.target.value)}/>
            </div>
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_storiessemana">Email de contacto</label>
                <input type="text" className="form-control" id="email" placeholder="!ncommun@incommun.com" value={campEmail} onChange={(value) => setcampEmail(value.target.value)}/>
            </div>

            <h3 className="mt-4">
                <b>Marketing Digital</b>
            </h3>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="md_redessociais">Quais Redes Sociais?</label>
            <input type="text" className="form-control" id="md_redessociais" placeholder="Facebook, Instagram, ..." value={campMDRedesSociais} onChange={(value) => setcampMDRedesSociais(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="md_publicacoessemana">Quantas publicações por semana?</label>
            <input type="" className="form-control" id="md_publicacoessemana" placeholder="1 a 7..." value={campMDPublicacoesPorSemana} onChange={(value) => setcampMDPublicacoesPorSemana(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_storiessemana">Quantas stories por semana?</label>
                <input type="text" className="form-control" id="md_storiessemana" placeholder="1 a 7..." value={campMDStoriesPorSemana} onChange={(value) => setcampMDStoriesPorSemana(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_reelssemana">Quantas reels por semana?</label>
                <input type="" className="form-control" id="md_reelssemana" placeholder="1 a 7..." value={campMDRellsPorSemana} onChange={(value) => setcampMDRellsPorSemana(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_designpublicacoes">Pretende design para publicações?</label>
                <input type="text" className="form-control" id="md_designpublicacoes" placeholder="Sim ou não" value={campMDDesign} onChange={(value) => setcampMDDesign(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_covercapames">Quantas cover / capa por mês?</label>
                <input type="" className="form-control" id="md_covercapames" placeholder="1 a 3..." value={campMDCapaPorMes} onChange={(value) => setcampMDCapaPorMes(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_copywriting">Pretende Copywriting?</label>
                <input type="text" className="form-control" id="md_copywriting" placeholder="Sim ou não" value={campMDCopywriting} onChange={(value) => setcampMDCopywriting(value.target.value)}/>
            </div>
        
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_planificacao">Pretende planificação editorial?</label>
                <input type="" className="form-control" id="md_planificacao" placeholder="Sim ou não" value={campMDPlanificaçãoEditorial} onChange={(value) => setcampMDPlanificaçãoEditorial(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_consultoriadigital">Quanto tempo de consultoria Digital por semana?</label>
                <input type="text" className="form-control" id="md_consultoriadigital" placeholder="1 a 3..." value={campMDTempoConsultoriaDigitalPorSemana} onChange={(value) => setcampMDTempoConsultoriaDigitalPorSemana(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_gestaocampanhas">Pretende gestão de campanhas?</label>
                <input type="" className="form-control" id="md_gestaocampanhas" placeholder="Sim ou não" value={campMDGestaoCampanhas} onChange={(value) => setcampMDGestaoCampanhas(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_relatoriomensal">Pretende relatório mensal?</label>
                <input type="text" className="form-control" id="md_relatoriomensal" placeholder="Sim ou não" value={campMDRelatorioMensal} onChange={(value) => setcampMDRelatorioMensal(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_publicidadepaga">Pretende ter publicidade paga?</label>
                <input type="" className="form-control" id="md_publicidadepaga" placeholder="1 a 3..." value={campMDPublicidadePaga} onChange={(value) => setcampMDPublicidadePaga(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_emailsmsmarketing">Pretende ter email & SMS Marketing?</label>
                <input type="text" className="form-control" id="md_emailsmsmarketing" placeholder="Sim ou não" value={campMDEmailMarketing} onChange={(value) => setcampMDEmailMarketing(value.target.value)}/>
            </div>
        
            <div className="form-group mt-3 mx-4">
                <label htmlFor="md_otimizacaoseosem">Pretende ter otimização SEO e SEM?</label>
                <input type="" className="form-control" id="md_otimizacaoseosem" placeholder="Sim ou não" value={campMDOtimizaçãoSEO} onChange={(value) => setcampMDOtimizaçãoSEO(value.target.value)}/>
            </div>

            <h3 className="mt-4">
                <b>Design Gráfico</b>
            </h3>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="dg_analiseconcorrencia">Pretende ter análise da concorrência?</label>
            <input type="text" className="form-control" id="dg_analiseconcorrencia" placeholder="Sim ou não" value={campDGAnaliseConcorrencia} onChange={(value) => setcampDGAnaliseConcorrencia(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="dg_criacaologotipo">Pretende a criação de logótipo?</label>
            <input type="" className="form-control" id="dg_criacaologotipo" placeholder="Sim ou não" value={campDGLogotipo} onChange={(value) => setcampDGLogotipo(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="dg_paletacores">Pretende ter uma paleta de cores?</label>
                <input type="text" className="form-control" id="dg_paletacores" placeholder="Sim ou não" value={campDGPaletaCores} onChange={(value) => setcampDGPaletaCores(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="dg_sloganmarca">Pretende criar um slogan para a marca?</label>
                <input type="" className="form-control" id="dg_sloganmarca" placeholder="Sim ou não" value={campDGSlogan} onChange={(value) => setcampDGSlogan(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="dg_manualnormas">Pretende um manual de normas gráficas?</label>
                <input type="text" className="form-control" id="dg_manualnormas" placeholder="Sim ou não" value={campDGManualNormasGraficas} onChange={(value) => setcampDGManualNormasGraficas(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="dg_estacionario">Pretende um estacionário?</label>
                <input type="" className="form-control" id="dg_estacionario" placeholder="Sim ou não" value={campDGEstacionario} onChange={(value) => setcampDGEstacionario(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="dg_brandingrebranding">Pretende um Branding & Rebranding?</label>
                <input type="text" className="form-control" id="dg_brandingrebranding" placeholder="Sim ou não" value={campDGBrandingRebranding} onChange={(value) => setcampDGBrandingRebranding(value.target.value)}/>
            </div>
        
            <div className="form-group mt-3 mx-4">
                <label htmlFor="dg_estrategiamarca">Pretende ter uma estratégia de marca?</label>
                <input type="" className="form-control" id="dg_estrategiamarca" placeholder="Sim ou não" value={campDGEstrategiaMarca} onChange={(value) => setcampDGEstrategiaMarca(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="dg_registodemarca">Pretende ter um registo de marca Design editorial?</label>
                <input type="text" className="form-control" id="dg_registodemarca" placeholder="Sim ou não" value={campDGRegistoMarcaDesignEditorial} onChange={(value) => setcampDGRegistoMarcaDesignEditorial(value.target.value)}/>
            </div>
            
            <h3 className="mt-4">
                <b>Website e Lojas online</b>
            </h3>

            <h5 className="mx-4 mt-4">
                <b>Se for site institucional:</b>
            </h5>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="wl_si_websiteonepage">Pretende um Website ou One Page?</label>
            <input type="text" className="form-control" id="wl_si_websiteonepage" placeholder="Website ou One Page" value={campWLOSIWebsiteOnePage} onChange={(value) => setcampWLOSIWebsiteOnePage(value.target.value)}/>
            </div>


            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_si_paginaspretende">Quantas páginas pretende ter?</label>
                <input type="text" className="form-control" id="wl_si_paginaspretende" placeholder="1 a 7..." value={campWLOSILimitePaginas} onChange={(value) => setcampWLOSILimitePaginas(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_si_portefolio">Com portfólio?</label>
                <input type="" className="form-control" id="wl_si_portefolio" placeholder="Sim ou não" value={campWLOSIPortfolio} onChange={(value) => setcampWLOSIPortfolio(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_si_conteudostextuais">Com Conteúdos textuais á escolha?</label>
                <input type="text" className="form-control" id="wl_si_conteudostextuais" placeholder="Sim ou não" value={campWLOSIConteudosTextuais} onChange={(value) => setcampWLOSIConteudosTextuais(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_si_alojamento">Com alojamento? </label>
                <input type="" className="form-control" id="wl_si_alojamento" placeholder="Sim ou não" value={campWLOSIAlojamento} onChange={(value) => setcampWLOSIAlojamento(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_si_dominio">Com domínio?</label>
                <input type="text" className="form-control" id="wl_si_dominio" placeholder="Sim ou não" value={campWLOSIDominio} onChange={(value) => setcampWLOSIDominio(value.target.value)}/>
            </div>

            <h5 className="mx-4 mt-4">
                <b>Se for loja online:</b>
            </h5>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="wl_lo_limitepaginas">Pretende ter um limite de páginas?</label>
            <input type="" className="form-control" id="wl_lo_limitepaginas" placeholder="Sim ou não" value={campWLOLOLimitePaginas} onChange={(value) => setcampWLOLOLimitePaginas(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_lo_paginaspretende">Quantas páginas pretende ter?</label>
                <input type="text" className="form-control" id="wl_lo_paginaspretende" placeholder="1 a 7..." value={campWLOLOPaginasPretende} onChange={(value) => setcampWLOLOPaginasPretende(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_lo_integracao">Com integração?</label>
                <input type="" className="form-control" id="wl_lo_integracao" placeholder="Sim ou não" value={campWLOLOIntegracao} onChange={(value) => setcampWLOLOIntegracao(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_lo_conteudostextuais">Com Conteúdos textuais á escolha?</label>
                <input type="text" className="form-control" id="wl_lo_conteudostextuais" placeholder="Sim ou não" value={campWLOLOConteudosTextuais} onChange={(value) => setcampWLOLOConteudosTextuais(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_lo_alojamento">Com alojamento? </label>
                <input type="" className="form-control" id="wl_lo_alojamento" placeholder="Sim ou não" value={campWLOLOAlojamento} onChange={(value) => setcampWLOLOAlojamento(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="wl_lo_dominio">Com domínio?</label>
                <input type="text" className="form-control" id="wl_lo_dominio" placeholder="Sim ou não" value={campWLOLODominio} onChange={(value) => setcampWLOLODominio(value.target.value)}/>
            </div>

            <h3 className="mt-4">
                <b>Comunicação e consultória</b>
            </h3>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="cc_comunicacaoconsultoria">Pretende ter comunicação & Consultoria?</label>
            <input type="text" className="form-control" id="cc_comunicacaoconsultoria" placeholder="Sim ou não" value={campCCComunicacaoEConsultoria} onChange={(value) => setcampCCComunicacaoEConsultoria(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
            <label htmlFor="cc_consultoriamarketing">Pretende ter consultoria de marketing e comunicação?</label>
            <input type="" className="form-control" id="cc_consultoriamarketing" placeholder="Sim ou não" value={campCCConsultoriaDeMarketingComunicacao} onChange={(value) => setcampCCConsultoriaDeMarketingComunicacao(value.target.value)}/>
            </div>

            <div className="form-group mt-3 mx-4">
                <label htmlFor="cc_organizacaoeventos">Pretende ter organização de eventos?</label>
                <input type="text" className="form-control" id="cc_organizacaoeventos" placeholder="Sim ou não" value={campCCOrganizacaoDeEventos} onChange={(value) => setcampCCOrganizacaoDeEventos(value.target.value)}/>
            </div>
    
            <div className="form-group mt-3 mx-4">
                <label htmlFor="cc_assessoriacriacao">Pretende ter uma assessoria e criação de conteúdo?</label>
                <input type="" className="form-control" id="cc_assessoriacriacao" placeholder="Sim ou não" value={campCCAssessoriaECriaçãoDeConteudo} onChange={(value) => setcampCCAssessoriaECriaçãoDeConteudo(value.target.value)}/>
            </div>

            <h5 className="col-lg-6 offset-lg-3 text-center mt-5">Ao fim de preencher este formulário e de o submeter,
            nós iremos avaliar e dar uma resposta brévia no prazo de 48 horas.
          </h5>

            <div className="py-5 text-center">
              <button type="button" className=" btn btn-primary text-center btnSubmeter" onClick={() => SendSave()}>Submeter</button>
            </div>

        </form>
    </div>
        <div className="mt-5 bg-amarelo py-5" >
          <div className="container-fluid">
            <footer className="py-5 mt-5 bg-amarelo tx-branco">
              <div>
                <h5 className="text-center">Na incommun</h5>
                <h1 className="text-center footer-text">damos vida ao</h1>
                <h1 className="text-center footer-text">seu negócio.</h1>
              </div>
              <div className="container-fluid" />
              <div className="row justify-content-between">
                <div className="mx-5 mt-5 col-4 col-lg-2">
                  <h6>Política de Privacidade</h6>
                </div>
                <div className="mt-5 col-8 col-lg-5 text-right">
                  <h6 className="">@ 2022 incommun creative lab All rights reserved</h6>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div >

    );


  function SendSave() {
    event.preventDefault();
     if(campNomeMarca === "") {
      alert("Insira nome da marca!");
    }  else if(campEmail === "") {
      alert("Insira email de contacto!");
    }  else {
      const baseUrl = "https://backend-incomum.herokuapp.com/formulariofrontoffice/create";
      const datapost = {
        datapreenchimento: campDataPreenchimento,
        nome_marca: campNomeMarca,
        email: campEmail,
        MD_redeSociais: campMDRedesSociais,
        MD_publicaçõesPorSemana: campMDPublicacoesPorSemana,
        MD_storiesPorSemana: campMDStoriesPorSemana,
        MD_reelsPorSemana: campMDRellsPorSemana,
        MD_design: campMDDesign,
        MD_capaPorMes: campMDCapaPorMes,
        MD_copywriting: campMDCopywriting,
        MD_planificaçãoEditorial: campMDPlanificaçãoEditorial,
        MDTempoConsultoriaDigitalPorSemana: campMDTempoConsultoriaDigitalPorSemana,
        MD_gestaoCampanhas: campMDGestaoCampanhas,
        MD_relatorioMensal: campMDRelatorioMensal,
        MD_publicidadePaga: campMDPublicidadePaga,
        MD_emailMarketing: campMDEmailMarketing,
        MD_otimizaçãoSEO: campMDOtimizaçãoSEO,
        DG_analiseConcorrencia: campDGAnaliseConcorrencia,
        DG_Logotipo: campDGLogotipo,
        DG_paletaCores: campDGPaletaCores,
        DG_slogan: campDGSlogan,
        DG_manualNormasGraficas: campDGManualNormasGraficas,
        DG_estacionario: campDGEstacionario,
        DG_brandingRebranding: campDGBrandingRebranding,
        DG_estrategiaMarca: campDGEstrategiaMarca,
        DG_registoMarcaDesignEditorial: campDGRegistoMarcaDesignEditorial,
        WLOSI_websiteOnePage: campWLOSIWebsiteOnePage,
        WLOSI_limitePaginas: campWLOSILimitePaginas,
        WLOSI_portfolio: campWLOSIPortfolio,
        WLOSI_conteudosTextuais: campWLOSIConteudosTextuais,
        WLOSI_alojamento: campWLOSIAlojamento,
        WLOSI_dominio: campWLOSIDominio,
        WLOLO_limitePaginas: campWLOLOLimitePaginas,
        WLOLO_paginasPretende: campWLOLOPaginasPretende,
        WLOLO_integracao: campWLOLOIntegracao,
        WLOLO_conteudosTextuais: campWLOLOConteudosTextuais,
        WLOLO_alojamento: campWLOLOAlojamento,
        WLOLO_dominio: campWLOLODominio,
        CC_comunicacaoEConsultoria: campCCComunicacaoEConsultoria,
        CC_consultoriaDeMarketingComunicacao: campCCConsultoriaDeMarketingComunicacao,
        CC_organizacaoDeEventos: campCCOrganizacaoDeEventos,
        CC_assessoriaECriaçãoDeConteudo: campCCAssessoriaECriaçãoDeConteudo,
      };
      console.log(datapost);

       axios
        .post(baseUrl, datapost)
        .then((response) => {
          console.log(response);
          if (response.data.success === true) {
            alert(response.data.message);
            window.location.reload();

          } else {
            alert(response.data.message);
            window.location.reload();

          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }


}