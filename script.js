
    //BOTÃO SOBRE MIM
    btn_state_about = "desativado";
    function ativar_sobremim(){
    if(btn_state_about == "desativado"){

        alert("ainda nao funciona");
        document.getElementById("btn_sobremim").style.filter = "invert(1)";
        btn_state_about = "ativado";
        btn_state_projects = "ativado";
        ativar_projetos();
        
    } else if (btn_state_about == "ativado"){

        document.getElementById("btn_sobremim").style.filter = "invert(0)";
        btn_state_about = "desativado";
    }
    }
    //BOTÃO SOBRE MIM




    //BOTÃO PROJETOS
    btn_state_projects = "desativado";
    aviso_01 = "0";

    function ativar_projetos(){
    if(btn_state_projects == "desativado"){
        
            if(aviso_01 == "0"){
                setTimeout(() => {
                    document.getElementById("aviso_projetos").style.transform = "translateY(0%)";
                    document.getElementById("aviso_projetos").style.transition = "3s";
                    document.getElementById("aviso_projetos").style.opacity = "1";
                    document.getElementById("aviso_projetos").style.visibility = "visible";
                }, 1000);
        
                setTimeout(() => {
                    document.getElementById("aviso_projetos").style.opacity = "0";
                    document.getElementById("aviso_projetos").style.transition = "1s";
                }, 8000);

                setTimeout(() => {
                    document.getElementById("aviso_projetos").style.visibility = "hidden";
                    document.getElementById("aviso_projetos").style.display = "none";
                }, 8600);

                    aviso_01 = "1";
            } else {}


            

        document.getElementById("background_projetos").style.opacity = "0";
        document.getElementById("background_projetos").style.display = "block";
        document.getElementById("background_projetos").style.transition = "0.6s";
        setTimeout(() => {
        document.getElementById("background_projetos").style.opacity = "1";
        document.getElementById("btn_projetos").style.filter = "invert(1)";
        }, 100);
        
        btn_state_projects = "ativado";
        btn_state_about = "ativado";
        ativar_sobremim();
        window.scrollTo(0, 700);
        
    } else if (btn_state_projects == "ativado"){

        setTimeout(() => {
            
            document.getElementById("btn_projetos").style.filter = "invert(0)";
            document.getElementById("background_projetos").style.transition = "1s";
            document.getElementById("background_projetos").style.opacity = "0";
        }, 100);

        setTimeout(() => {
            document.getElementById("background_projetos").style.display = "none";
            document.getElementById("background_projetos").style.opacity = "1";
        }, 700);
        
        btn_state_projects = "desativado";
    }
    }
    //BOTÃO PROJETOS


    //RETORNAR PAGINA
    function return_page(){
        window.scrollTo(0, 1);   
    }
    //RETORNAR PAGINA




    //Tema Escuro

    tema = "claro";
    function alterar_tema(){

        if(tema == "claro"){


        document.getElementById("wave_bottom").style.transition = "2.06s";
        document.getElementById("wave_bottom").style.filter = "invert(0.85)";

        document.getElementById("background_projetos").style.transition= "2s";
        document.getElementById("background_projetos").style.backgroundColor = "#262626";
        document.getElementById("dark").style.transition= "2s";
        document.getElementById("dark").style.backgroundColor = "#262626";

        document.getElementById("Titulo_Projetos").style.transition= "2s";
        document.getElementById("Titulo_Projetos").style.color= "#e9ffe9";

        
        
        document.getElementById("img_01").style.transition= "2s";
        document.getElementById("img_01").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_01").style.transition= "2s";
        document.getElementById("p_text_01").style.color= "#e9ffe9";


        document.getElementById("img_02").style.transition= "2s";
        document.getElementById("img_02").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_02").style.transition= "2s";
        document.getElementById("p_text_02").style.color= "#e9ffe9";

        document.getElementById("img_03").style.transition= "2s";
        document.getElementById("img_03").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_03").style.transition= "2s";
        document.getElementById("p_text_03").style.color= "#e9ffe9";
        
        document.getElementById("img_04").style.transition= "2s";
        document.getElementById("img_04").style.border= "3px solid #e9ffe9";
        document.getElementById("p_text_04").style.transition= "2s";
        document.getElementById("p_text_04").style.color= "#e9ffe9";

        document.getElementById("return_icon").style.color = "#e9ffe9";
        tema = "escuro";



        } else if (tema == "escuro"){


        document.getElementById("wave_bottom").style.transition = "2.06s";
        document.getElementById("wave_bottom").style.filter = "";

        document.getElementById("background_projetos").style.transition= "2s";
        document.getElementById("background_projetos").style.backgroundColor = "#fff";
        
        document.getElementById("dark").style.transition= "2s";
        document.getElementById("dark").style.backgroundColor = "#fff";

        document.getElementById("Titulo_Projetos").style.transition= "2s";
        document.getElementById("Titulo_Projetos").style.color= "#00467f";

        
        
        document.getElementById("img_01").style.transition= "2s";
        document.getElementById("img_01").style.border= "3px solid #00467f";
        document.getElementById("p_text_01").style.transition= "2s";
        document.getElementById("p_text_01").style.color= "#00467f";


        document.getElementById("img_02").style.transition= "2s";
        document.getElementById("img_02").style.border= "3px solid #00467f";
        document.getElementById("p_text_02").style.transition= "2s";
        document.getElementById("p_text_02").style.color= "#00467f";

        document.getElementById("img_03").style.transition= "2s";
        document.getElementById("img_03").style.border= "3px solid #00467f";
        document.getElementById("p_text_03").style.transition= "2s";
        document.getElementById("p_text_03").style.color= "#00467f";
        
        document.getElementById("img_04").style.transition= "2s";
        document.getElementById("img_04").style.border= "3px solid #00467f";
        document.getElementById("p_text_04").style.transition= "2s";
        document.getElementById("p_text_04").style.color= "#00467f";
        
        document.getElementById("return_icon").style.color = "#00467f";
        tema = "claro";
        }   

    }
    //Tema Escuro

    //Redirecionamento

    function chamar_link_01(){ window.open('https://github.com/MateusMSL/SA---DotBook', '_blank'); }
    function chamar_link_02(){ window.open('https://github.com/MateusMSL/SA_GG_Hardware', '_blank'); }
    function chamar_link_03(){ window.open('https://github.com/MateusMSL/SA-MAONARODA-JAVA', '_blank'); }
    function chamar_link_04(){ window.open('https://github.com/MateusMSL/SA-DEVWEB-IANESTECH', '_blank'); }

    //Redirecionamento