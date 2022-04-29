import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: black;
color: white;
display: flex;
 img{
     width: 80%;
 }
`


export default class Movies extends React.Component{
  state = {
    filmes:[
        {
            id:1,
            title:"Shrek",
            resume:"Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
            poster:"https://lh3.googleusercontent.com/Lam0iJ01DcjEGF2VtawFvnYqliQ9-5VXdcULHh7o0PyLSaU9wd-IZ4HkBq3fkgN4jdS_Os-TbtZiAaofd4T4wftNvCEmuE2lnen-lZQmOEVB7GdkUv-WS3k5s6Fzd46jw-zhNrI33TL1Pf3Rpruinj86mGHL7ia-vA7TwGziVf9RXlscur77vIb4QteTn4n9tsC51HWltfKeqXAdajRP-p5HN_eLCMe1Q53jwb4baX0_sW3bhsyonnx5bcQ1pAX7PnNrdxpLb1rzjm41IgJFsQ8FopzsZcaQnOmHRA5eLVipmF2GmX9vTcoUs2cYzzWZyOg_bXG-g2J6M8HeXIcqptXVuA7ymInP97PAz47p2ovwmtxPG3EnKaBzM4ZN3pAwKaI6A9B6t5qhoUjV3a3lu-eA04BestJuJoCxmluaqL-pLj95nBBH0lF_ewMTBGzxWSstWwwWHR9MFtWNf3G1GTq-kVjX-n5FPztJqdmlrVVz82ey10qBqlPJScSB31Ox5leNlM1xMno2C_RTfx-ACLwaL-j42bHejtO_mboxEcZyLwDWoKqEVv2-YAm8jxndwI2JaWgrydvBzgf4vVlwYnOyRHDzzMviZN-njrS_SGSFtmCM-dI7v1Y1IYHFFtEIU5ThnURouF0CGFnWBnqt9ZgDavx0ZBMr7NMXZys9t-ZRIADB6cUdUmZCa3Tj7ArpKUG5PzIWJGj6bPwjzy2D74z43OYKcMV2T0taMbUyZVHRMVGi8WLr5E8RUH2JA-6oyXQsOftczzhZ8pys-uMAnX6G_yncsAOm4dHAv4HYHcNwEt3oExKiB9g8VVLflg=w520-h296-no?authuser=0"
        },
        {
            id:2,
            title:"Hoje Eu Quero Voltar Sozinho",
            resume:"Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
            poster:"https://lh3.googleusercontent.com/xbsafCJkafL0umX1fwQ85ijQFKOfCDqXNTuw7BTmLVhVGNc4BvdpFpuXjE8_4bsgzbxYrF0K7RQOsgOooQN4x_KZ7uNuUzGaOimbzdJauLVr3AgzEBF6tY-n6G9hW9wgGWqKP6v-zCFKYchDEgMGMGWoP-O352EsytO6hQltThWimyfOraFfnTu1YBmcyGoTFs7BVKYatOIP0AN1j3aMgoWgLlZ3HGT6AabwpDhX74Ap8w0pYLuAhilXHDcPUBJlVXTgaPYTDANg6Xq5jqb73HQnuqp7z9dbSPmE5lxlCvjJzsqBX5f6crbugYbZUp5L-EYTYB0o0mReFLrUmESauQjcK2V70EToQ9HsKSW635S32ECpMhMpx-4ymn3aj0Mvv_qUo9EuxNKapPwFf0AyD0-GgWvK9uUmP4Nzc9vhgj2rW0FVJefDIRbbnyvCNKJB_j3IhtpYYqLxynVw-nmMeP4Fp5G7xL3izVqQZ0x6_MnFBfXYmGX-Mj6fbnwxUc34jmY_bmwObhp4v-OeeYg4_ToGDFpjCmAwXfNLuDh8SBf6t8oDBP74ypA6uYeg135-Jjrs1mL21n5qEuA6HjnIInIWpwGsMWmuYX6aM8I1JOPi907ZKBjVfn_gaTUWvrOBQb3c43YA4dzeUq4ESicSQ7z9VrAGxeZClCg64p_QgPKxs0ZoFY-L_ZoWSAjuotRjkobCCe-mZubZ5kSbrjXLzmK2O7pAAOAxImpGokQNe-9iGSvZjlTNK8NS2WmYXphfr7QSm924fca-8k6ADa2VX-gEAM3N0TJr4J2pQxXwOGhUZg5IlnmLbtk5OXh0dw=w520-h296-no?authuser=0"
        },
        {
            id:3,
            title:"Spider-man",
            resume:"Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
            poster:"https://lh3.googleusercontent.com/tBs2jgzjIdrMJEioDdTFox_lYXMXDXCdj9Tm6XGv7f7fMl3OkBtOgo2-KNTDGQ6439-_5dM1Hgtm9eRrreFX1qv1EfgKAiYhmEMWQDoBmoCpnXNUluebsGVCMURKGy_n5oH0r50QxP3ArmlcYcDDG86MlEWzaehYJZW813Sx5K84bOKq-EZa0t9-ATJVIr6AeXFHvXntocalugZKK7zTn9HOOHBwnZqWjRwePrsfGuaq7FT_OQHtHrXOGQIaOwHEKwIg2ssc_1jcRFOZyo27GTHFFpDtnZJp5oFXOIUiWgeDYf769oh-wCIxI4JEzq35WdPr6nBQxT67o8apXmMf6Gqsv9BqCBowdIO_y3kJrudKCrSgJ5RBjvYLgrzEuhHwf6H5YU1AWCVVjq6p1CLTqrgBDbfhtF1Hgc-_UwI2jl-mO_MJLfEuF2HxacNqk7X04ISq_nFOYbSlaX2n7WI6b7KZcX2IT6S-FhvBqO4rFD49jFm8erFltFGhczQ_NM-omyqjjRlJb7NTh9vnoUHt8k6_aRSk2uDFYPjpKlas8lQlNQR_awUKWbDWWPUAddS1VlWqQgiO4JpfObkMt66h17rbBi4aqt2fAhLBvM8n0rlrJBodzLsouXCnQLHamo33aG6pzdHOxeT8pEjuio4d_NsGQ7ho3mNs9Zt9ZVgo_gJVTq8SnL5DPeAKT2O8ByAHeKiXZFsyj_Doh3IixHrNSYIQrqpR-0U9WO6FHptZ5hanK8OvFEXK4z4N4DLGT-l-byX9cD4H0Tge9m4xNCN8W48bQ22L0Djv65LXrSE2feegM2SsvAr3Ujv-x9R7hQ=w520-h296-no?authuser=0"
        },
        {
            id:4,
            title:"Que Horas Ela Volta",
            resume:"Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
            poster:"https://lh3.googleusercontent.com/0SiBypj4Y27Os5c012E-D7rN1wqOg8bbYvhlXYSd-469HCJJ7nERtWJ9qFMkrQoGRgnOQnX4whIyiJr1AUCyDde6g5W6_yqPN8XmjSpC7V0KcqHXPDGoYTYq2VEsHlVGwUqyIEAgyPc-yogJvaZu2-sL6fzQhm-vgzdr7kfR_PxYkV2gUEJkqMBSQ_9SbFMvx_8VmSnJflAD3RYUIyj63tb2hiCfNuPkE8ca2-wYOQh8oWmbUqLPlILrt9IshxtjZIhhmy0WhQdnoxqNVwHaxg82qfDo6zBYnhgm6qcGKfy5SsnYDA23S_KdD1gpQ4XRrwcVDBk3xq8YQHiHBBDhecIZLcztvcUQTsMZ841YL4FVGjS7KkcwLtwJMLQdjjMVwns81KOeDQNsvz9t-uKFzTi0AuP2KtBLZzVIfaQWWoOgsP1CIhOG_QXbhGTjDEAJ3OKl9i4wQE6jrm1ohD_l206FcoeigdF_u-8koGfY8lLpEpATu--MzkroPHS3eTHxljR4Put3qEHyX5Al9qKIS3cM1YMIlK8CGMNnXL7j3rZzUsxnvErwgpyFeAVFUb1CgPF2FDETaA_lDq7c0W-gRDcPWDPc7KrPc54nwr0O0dhi3jY2bP79Cai3piRY3SqiLS8p38RyLBFEnaXtHmHOR1awgtei81I_dVKdwCl5yNAsD-u24Jwxg1tayaqLFPN_6ol-sZKm1XiyuLrF9iepba0u61A-RJ8UBjNv7s5eYx2Qt9QEUE9ImH6vqCiG3Ko-NMyVMeGIRYumSvB-nS9yMCPb7aw4bjuvz8xR5Uj0m4emz3WGQTB7BUhPKcdz3w=w520-h296-no?authuser=0"
        },
        {
            id:5,
            title:"Um Sonho De Liberdade",
            resume:"Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
            poster:"https://lh3.googleusercontent.com/dSrattFyz8iGhGcJPqabGQadW1703jenq4f48xwYBzpHfhIIdmjguovj0ScqdZwCEUObIIpF2CmXmT9bL9LO3QAU6PBT49IV6WXKVIEuen79Kg0Mtc4yVPzqN6njyLdQMAw-WsoaM2Q0mNis_Zc33wbZSlr0W22dFDMUGx3JLF1BSC8BxxhE05StENphIP5Y6az6B0WQelI6k5NSCvfCOlqgZkG7Pnq2dFLr-FDeL1Inzs9KEQY6v_ry8Da8K3GQ0GfeFbxEjmkyruc8_YhoBVub769yWD23KOcPgMNmj12fiHXku0MPOpcL3tVnC6gb_GZsXg4o4HgYIbUrwucbp5Dhjbj5NArTjHUtAcI2Y2PGF7oJdd3Eoe6IVGeZGJmi-jelhsdSn5jweaEPpkFjgCFZwH3raxpcbdLxPMwfUW9tipZWpqYuL6wfbhTUJQhB7i5iFtEFXh36u5qpF0ZU0r9oVlNqbn580APaGpjtQGDNQdu4aVLyPATjlbQe6rTdxHxZ8O-929cGsncUaFd4KdJrPA0jkL-Q4DU8YbOzK3RpjmduYwlKSWwdkulS6J_l3foG38e4EJLzTfq2-NRBMyw5OmlM_oMowuZz9aKjJLfr3WOknMagrInE2dX_pPPhNQXA38aDSbAo75lnCaS7942-_vsDPqOdjMhkxjaoRmdERs4G-ecsvUjkv-CTqtCm0NwHQ6I_H_e1IAYNyvWD0Yj5zoUCuOuAa_XT8M3JSsE0REmkI9UcuNPpjXoUVs8U2KyslO3cu2IXqLaHiTEzOSlrLmn4qCz_7NMrRRu46Eqr_srAbJh29NOQJnnlXw=w520-h296-no?authuser=0"
        }
    ]
  }


render(){
    return(
        <Container>
           {this.state.filmes.map(item=>(
               <div>
                   <img src={item.poster} />
                   <h2>{item.title}</h2>
                   <p>{item.resume}</p>
               </div>
           ))}
        </Container>
    )
}
}