{
  "locale": "pt-br",
  "title": "Cultura",
  "description": "Nossa avaliação de cultura, baseada em uma metodologia própria e cientificamente embasada, combina dados quantitativos e qualitativos para mapear com precisão a dinâmica interna da sua organização. Essa abordagem transforma insights em ações estratégicas, promovendo um ambiente mais saudável, produtivo e alinhado aos objetivos da empresa.\n",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=f22db215-d5bd-405d-ba94-17fe9429f447",
  "logoPosition": "right",
  "completedHtml": "<h3>Obrigado por participar!</h3>",
  "completedBeforeHtml": "<h3>Você já concluiu esta avaliação.</h3>",
  "loadingHtml": "<h3>Carregando...</h3>",
  "pages": [
    {
      "name": "page1",
      "title": "Demografia",
      "description": "As próximas perguntas são opcionais e focam em entender melhor a demografia da equipe. Com essas informações, poderemos criar soluções mais personalizadas e eficazes para melhorar ainda mais o ambiente de trabalho. Sua participação nos ajuda a atuar com mais precisão nas ações que promovem bem-estar e produtividade.\n",
      "elements": [
        {
          "type": "dropdown",
          "name": "question2",
          "title": "Gênero",
          "choices": [
            {
              "value": "Item 1",
              "text": "Masculino"
            },
            {
              "value": "Item 2",
              "text": "Feminino"
            },
            {
              "value": "Item 3",
              "text": "Outro"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "question1",
          "title": "Faixa Etária",
          "choices": [
            {
              "value": "Item 1",
              "text": "18-24"
            },
            {
              "value": "Item 2",
              "text": "25-34"
            },
            {
              "value": "Item 3",
              "text": "35-44"
            },
            {
              "value": "Item 4",
              "text": "45-54"
            },
            {
              "value": "Item 5",
              "text": "55-64"
            },
            {
              "value": "Item 6",
              "text": "+65"
            }
          ]
        },
        {
          "type": "dropdown",
          "name": "question3",
          "title": "Tempo de Casa",
          "choices": [
            {
              "value": "Item 1",
              "text": "Até 1 ano"
            },
            {
              "value": "Item 2",
              "text": "1 a 2 anos"
            },
            {
              "value": "Item 3",
              "text": "3 a 4 anos"
            },
            {
              "value": "Item 4",
              "text": "5 a 10 anos"
            },
            {
              "value": "Item 5",
              "text": "Mais de 10 anos"
            }
          ]
        },
        {
          "type": "rating",
          "name": "question4",
          "title": "De 0 a 10, qual a probabilidade de você continuar trabalhando na \"empresa\" por mais um ano?",
          "description": {
            "pt-br": "0 sendo \"Nada Provável\" e 10 sendo \"Muito Provável\""
          },
          "valueName": "eNPS",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        }
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "imagepicker",
          "name": "question7",
          "title": "Sinto que estou no controle quando se trata do trabalho que preciso entregar.",
          "valueName": "autonomia",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7ab73a9d-e67f-4f1d-83ce-d6160e98922c"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=484788f6-0c54-4b44-bbe2-cd17e6024920"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=26956753-1a26-4dd6-9592-4517e9510d25"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=55efa61a-2ed3-4f65-a2f6-329a2409a480"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "rating",
          "name": "question8",
          "title": "De 0 a 10, como avaliaria as habilidades de gestão de seu supervisor direto?",
          "description": {
            "pt-br": "0 sendo \"Ruim\" e 10 sendo \"Excelente\""
          },
          "valueName": "colaboracao-com-gestor",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question9",
          "title": "De 0 a 10, como avaliaria a contribuição de seus colegas nas metas e nos objetivos da empresa?",
          "description": {
            "pt-br": "0 sendo \"Baixo\" e 10 sendo \"Alto\""
          },
          "valueName": "colaboracao-com-colegas",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question10",
          "title": "De 0 a 10, quão satisfeito está com a frequência em que comunica com o seu supervisor direto?",
          "description": {
            "pt-br": "0 sendo \"Nada frequente\" e 10 sendo \"Muito frequente\""
          },
          "valueName": "comunicacao-com-gestor",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question11",
          "title": "De 0 a 10, quão satisfeito está com a frequência em que se comunica com seus colegas de trabalho?",
          "description": {
            "pt-br": "0 sendo \"Nada satisfeito\" e 10 sendo \"Muito satisfeito\""
          },
          "valueName": "comunicacao-com-colegas",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "imagepicker",
          "name": "question12",
          "title": "O meu supervisor direto é um exemplo de sucesso na organização…",
          "valueName": "confianca-no-gestor",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d193d90b-bfb8-41be-b274-f886e0afbde9"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8d6a5cb4-ba10-497a-a5aa-d88e3171d74a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d5d745f1-f9cb-4acc-8ee2-1fa7cd11eca8"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ddba5fba-040b-4d0d-b453-22d6ec87580b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question30",
          "title": "Os gestores nos mantêm informados sobre assuntos importantes e possíveis mudanças na organização…",
          "valueName": "comunicacao-com-gestor",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d193d90b-bfb8-41be-b274-f886e0afbde9"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8d6a5cb4-ba10-497a-a5aa-d88e3171d74a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d5d745f1-f9cb-4acc-8ee2-1fa7cd11eca8"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ddba5fba-040b-4d0d-b453-22d6ec87580b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question41",
          "title": "Sou encorajado a falar o que penso sem medo ou consequências negativas.",
          "valueName": "inovacao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d193d90b-bfb8-41be-b274-f886e0afbde9"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8d6a5cb4-ba10-497a-a5aa-d88e3171d74a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d5d745f1-f9cb-4acc-8ee2-1fa7cd11eca8"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ddba5fba-040b-4d0d-b453-22d6ec87580b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question42",
          "title": "A empresa escuta e valoriza as sugestões e opiniões dadas por minha equipe.",
          "valueName": "inovacao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d193d90b-bfb8-41be-b274-f886e0afbde9"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8d6a5cb4-ba10-497a-a5aa-d88e3171d74a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d5d745f1-f9cb-4acc-8ee2-1fa7cd11eca8"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ddba5fba-040b-4d0d-b453-22d6ec87580b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question13",
          "title": "Os gestores confiam que as pessoas farão um bom trabalho sem precisar vigiá-las…",
          "valueName": "autonomia",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3b3d14e3-a7b9-4d70-89b6-b3bf6233ab32"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5b4a978a-debe-4951-911c-67c640a109a9"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=be93baf7-2673-41e0-b8f9-b7f96b41a976"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=84d1d096-92e6-4fba-a620-8b3c335f17f4"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question28",
          "title": "Você sente que possui autonomia para decidir quando deve ou não realizar suas tarefas?",
          "valueName": "autonomia",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3b3d14e3-a7b9-4d70-89b6-b3bf6233ab32"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5b4a978a-debe-4951-911c-67c640a109a9"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=be93baf7-2673-41e0-b8f9-b7f96b41a976"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=84d1d096-92e6-4fba-a620-8b3c335f17f4"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question14",
          "title": "O meu gestor me ajuda na execução/organização das minhas tarefas (dia a dia, gestão do tempo, resolução de problemas, etc)",
          "valueName": "colaboracao-com-gestor",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=91916ffb-ca4c-42c0-bd52-55354bc196a1"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=163e289e-7f84-4564-a84c-d10bd812bcbf"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0de6d60c-88e7-45f9-8a71-02127063b4dd"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=67becb42-abb1-4592-8eab-e0a7a745d6c8"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question29",
          "title": "Quando você pede ajuda para o seu supervisor direto, ele(a) consegue parar um tempo e te ajudar?",
          "valueName": "colaboracao-com-gestor",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=91916ffb-ca4c-42c0-bd52-55354bc196a1"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=163e289e-7f84-4564-a84c-d10bd812bcbf"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0de6d60c-88e7-45f9-8a71-02127063b4dd"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=67becb42-abb1-4592-8eab-e0a7a745d6c8"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "rating",
          "name": "question15",
          "title": "De 0 a 10, quão capacitados são os seus colegas para exercerem suas funções?",
          "description": {
            "pt-br": "0 sendo \"Nada capacitados\" e 10 sendo \"Muito capacitados\""
          },
          "valueName": "colaboracao-com-colegas",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question16",
          "title": "De 0 a 10, como avalia o peso de sua carga de trabalho?",
          "description": {
            "pt-br": "0 sendo \"Nada adequado\" e 10 sendo \"Muito adequado\""
          },
          "valueName": "equilibrio-vida-pessoal-profissional",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question17",
          "title": "De 0 a 10, como avaliaria o equilíbrio entre seu trabalho e sua vida pessoal?",
          "description": {
            "pt-br": "0 sendo \"Ruim\" e 10 sendo \"Excelente\""
          },
          "valueName": "equilibrio-vida-pessoal-profissional",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question18",
          "title": "De 0 a 10, quão agradável é o seu ambiente de trabalho?",
          "description": {
            "pt-br": "0 sendo \"Ruim\" e 10 sendo \"Excelente\""
          },
          "valueName": "local-de-trabalho",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question19",
          "title": "De 0 a 10, quão satisfeito está com os benefícios oferecidos pela \"empresa\"?",
          "description": {
            "pt-br": "0 sendo \"Nada satisfeito\" e 10 sendo \"Muito satisfeito\""
          },
          "valueName": "local-de-trabalho",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question20",
          "title": "De 0 a 10, como você avaliaria as ações da \"empresa\" a fim de promover o bem-estar internamente? (benefícios, incentivos,…)",
          "description": {
            "pt-br": "0 sendo \"Ruim\" e 10 sendo \"Excelente\""
          },
          "valueName": "local-de-trabalho",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question21",
          "title": "De 0 a 10, como avaliaria o nível de acesso que possui para realizar treinamentos relevantes?",
          "description": {
            "pt-br": "0 sendo \"Ruim\" e 10 sendo \"Excelente\""
          },
          "valueName": "maestria",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question22",
          "title": "De 0 a 10, quão importante é o seu trabalho para você?",
          "description": {
            "pt-br": "0 sendo \"Nada importante\" e 10 sendo \"Muito importante\""
          },
          "valueName": "papel-na-organizacao",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question23",
          "title": "De 0 a 10, você sente que os seus pontos fortes são aproveitados no trabalho?",
          "description": {
            "pt-br": "0 sendo \"Nada aproveitados\" e 10 sendo \"Muito aproveitados\""
          },
          "valueName": "papel-na-organizacao",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question24",
          "title": "De 0 a 10, qual a probabilidade de você recomendar os produtos e serviços da “empresa” para um amigo?",
          "description": {
            "pt-br": "0 sendo \"Nada provável\" e 10 sendo \"Muito provável\""
          },
          "valueName": "promocao-da-marca",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question25",
          "title": {
            "default": "De 0 a 10, qual é o seu nível de felicidade para esta semana?",
            "pt-br": "De 0 a 10, qual é o seu nível de felicidade no trabalho?"
          },
          "description": {
            "pt-br": "0 sendo \"Nada feliz\" e 10 sendo \"Muito feliz\""
          },
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question26",
          "title": "De 0 a 10, como avaliaria o seu nível de motivação com a sua função para esta semana?",
          "description": {
            "pt-br": "0 sendo \"Ruim\" e 10 sendo \"Excelente\""
          },
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "question27",
          "title": "De 0 a 10, quão feliz você se sente para o trabalho esta semana?",
          "description": {
            "pt-br": "0 sendo \"Nada feliz\" e 10 sendo \"Muito feliz\""
          },
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "rateCount": 11,
          "rateMin": 0,
          "rateMax": 10
        },
        {
          "type": "imagepicker",
          "name": "question31",
          "title": "A liderança comunica com a gente de forma aberta e honesta.",
          "valueName": "comunicacao-com-gestor",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=54e23e77-8120-40c3-b662-13a57c6357f2"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0f467494-b7cb-4d9a-b282-559f6baf68de"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c97cb374-787b-46ee-b0c6-5b665fc446eb"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7028eb34-5d33-472f-beee-25935f43ee0b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question56",
          "title": "Os líderes da \"empresa\" comunicam uma visão que me motiva…",
          "valueName": "missao-e-visao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=54e23e77-8120-40c3-b662-13a57c6357f2"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0f467494-b7cb-4d9a-b282-559f6baf68de"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c97cb374-787b-46ee-b0c6-5b665fc446eb"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7028eb34-5d33-472f-beee-25935f43ee0b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question68",
          "title": "Você está satisfeito com a quantidade de feedback vindo do seu gestor direto?",
          "valueName": "quantidade-de-feedback",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=54e23e77-8120-40c3-b662-13a57c6357f2"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0f467494-b7cb-4d9a-b282-559f6baf68de"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c97cb374-787b-46ee-b0c6-5b665fc446eb"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7028eb34-5d33-472f-beee-25935f43ee0b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question69",
          "title": "Reconhecimentos e elogios são dados de maneira recorrente…",
          "valueName": "quantidade-do-reconhecimento",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=21d8af4d-e21c-4bcc-9322-a0d8863cdb17"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=821dfd30-cf0d-4e1e-8674-643eed9a686c"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b49675c4-33b6-4620-bcb6-c769af2c0619"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2de13112-a187-426e-aafe-a30cac1bc10b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question70",
          "title": "Estou feliz com a quantidade de elogios que recebo…",
          "valueName": "quantidade-do-reconhecimento",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=21d8af4d-e21c-4bcc-9322-a0d8863cdb17"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=821dfd30-cf0d-4e1e-8674-643eed9a686c"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b49675c4-33b6-4620-bcb6-c769af2c0619"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2de13112-a187-426e-aafe-a30cac1bc10b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question71",
          "title": "A \"empresa\" encoraja o reconhecimento entre os colegas de trabalho…",
          "valueName": "quantidade-do-reconhecimento",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5c52cbd8-c4b9-419c-86a3-6b396b05d2be"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d3be8e16-498d-4a10-bd21-1b702ab883ea"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=f6d03c91-8030-47ac-bcac-690639caefba"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=f07e198b-69e0-417a-a4af-30e4619f2b55"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question32",
          "title": "Meus colegas recebem bem minhas opiniões e críticas…",
          "valueName": "comunicacao-com-colegas",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 4",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=58874a54-dcac-4c96-b0dd-7ef255a2d83a"
            },
            {
              "value": "Image 1",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cc316910-f947-4e78-a34e-263e026e7008"
            },
            {
              "value": "Image 2",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=06793429-396e-430f-98e8-0f8ec9e8dfd3"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5d55adcd-5891-4fba-a592-3703fb32eb71"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question39",
          "title": "Você sente que a equipe valoriza as suas ideias?",
          "valueName": "inovacao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 4",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=58874a54-dcac-4c96-b0dd-7ef255a2d83a"
            },
            {
              "value": "Image 1",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cc316910-f947-4e78-a34e-263e026e7008"
            },
            {
              "value": "Image 2",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=06793429-396e-430f-98e8-0f8ec9e8dfd3"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5d55adcd-5891-4fba-a592-3703fb32eb71"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question40",
          "title": "Você sente que a equipe valoriza as suas sugestões?",
          "valueName": "inovacao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 4",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=58874a54-dcac-4c96-b0dd-7ef255a2d83a"
            },
            {
              "value": "Image 1",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cc316910-f947-4e78-a34e-263e026e7008"
            },
            {
              "value": "Image 2",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=06793429-396e-430f-98e8-0f8ec9e8dfd3"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5d55adcd-5891-4fba-a592-3703fb32eb71"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question107",
          "title": {
            "default": "Você sente que a equipe valoriza as suas sugestões?",
            "pt-br": "A empresa valoriza suas opiniões e sugestões?"
          },
          "valueName": "inovacao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 4",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=58874a54-dcac-4c96-b0dd-7ef255a2d83a"
            },
            {
              "value": "Image 1",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cc316910-f947-4e78-a34e-263e026e7008"
            },
            {
              "value": "Image 2",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=06793429-396e-430f-98e8-0f8ec9e8dfd3"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5d55adcd-5891-4fba-a592-3703fb32eb71"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question33",
          "title": "A comunicação feita entre os colegas é honesta e transparente…",
          "valueName": "comunicacao-com-colegas",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 4",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=be726163-929e-444a-bdd1-beeea77a4ab9"
            },
            {
              "value": "Image 1",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=fca6f302-a917-44e2-bd16-eea487a48035"
            },
            {
              "value": "Image 2",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0d152576-e823-4118-8bfc-a499d84bc5a2"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c1ea2338-b5cc-41cb-8439-da65dc5d5e57"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question34",
          "title": "Existe um sentimento de \"família\" na equipe…",
          "valueName": "confianca-com-colegas",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 4",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=be726163-929e-444a-bdd1-beeea77a4ab9"
            },
            {
              "value": "Image 1",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=fca6f302-a917-44e2-bd16-eea487a48035"
            },
            {
              "value": "Image 2",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0d152576-e823-4118-8bfc-a499d84bc5a2"
            },
            {
              "value": "Image 3",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c1ea2338-b5cc-41cb-8439-da65dc5d5e57"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question35",
          "title": "No geral, a remuneração realizada pela \"empresa\" é justa…",
          "valueName": "equidade",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=4ced6a0b-9f0e-48ff-8fae-995282ef8510"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=329169bb-4553-4082-bd73-6ff3af1d8a3b"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=6afb1898-f7e2-4c89-bd76-b47bf62ed182"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c400ca1b-3b31-4ce9-95ae-7129805643ef"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question36",
          "title": "Você sente que é assalariado de maneira justa frente aos cargos semelhantes em OUTRAS empresas?",
          "valueName": "equidade",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b065eaa8-0d43-4c0c-b8a2-256f7964f9fd"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c897956e-fa42-4b38-ba5e-10783d4aeb11"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=9901a334-33b7-443c-95c3-ef0eb05b314d"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2947c566-0165-4158-9ce4-be84a3b76f7f"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question37",
          "title": "As pessoas aqui são compensadas de forma justa pelo trabalho que fazem…",
          "valueName": "equidade",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0ee3fe29-320c-4ee3-8813-587783613804"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5fe59eba-038b-4839-a251-b479f51f9605"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=dced8fef-a2ea-445b-8168-a297a724b01e"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ef8b4491-0a41-4dc7-bd53-02360a3ad5b9"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question38",
          "title": "Os gestores enxergam os erros \"não intencionais\" como parte do negócio…",
          "valueName": "harmonia-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0ee3fe29-320c-4ee3-8813-587783613804"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5fe59eba-038b-4839-a251-b479f51f9605"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=dced8fef-a2ea-445b-8168-a297a724b01e"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ef8b4491-0a41-4dc7-bd53-02360a3ad5b9"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question82",
          "title": "Sou tratado com educação e respeito no trabalho.",
          "valueName": "valores",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0ee3fe29-320c-4ee3-8813-587783613804"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5fe59eba-038b-4839-a251-b479f51f9605"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=dced8fef-a2ea-445b-8168-a297a724b01e"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ef8b4491-0a41-4dc7-bd53-02360a3ad5b9"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question43",
          "title": "Você está satisfeito com o nível de conforto oferecido no ambiente de trabalho?",
          "valueName": "local-de-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3280d1ad-b668-4580-bfcd-9d26ade8de9b"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7e9b49f4-f322-4560-92ff-b6257800f2ba"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2e599d62-1aac-4fd1-b1cd-293b3d9e326a"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ec393b9b-513a-49b7-bc40-a774b74421a4"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question44",
          "title": "Tenho todos os materiais e os equipamentos que preciso para fazer meu trabalho…",
          "valueName": "local-de-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3280d1ad-b668-4580-bfcd-9d26ade8de9b"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7e9b49f4-f322-4560-92ff-b6257800f2ba"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2e599d62-1aac-4fd1-b1cd-293b3d9e326a"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ec393b9b-513a-49b7-bc40-a774b74421a4"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question45",
          "title": "A \"empresa\" possui ótimas oportunidades de crescimento profissional...",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d1e20e94-7adb-4f5c-97fd-f9ba2df48bef"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cd9d5d0c-cd81-4bd2-9d36-ef2aea8c0321"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=1cd8adc2-a846-4e2c-a97d-24c9379c0a12"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e7797179-3dd8-4a7a-b814-a716eb1ec7b1"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question46",
          "title": "Estou entusiasmado com o futuro da empresa. ",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=f01afe0a-41c3-463a-82ef-e97ee92088a8"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=20eb4666-58ff-42e5-9cfe-56c36fd3c460"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8dc2bef6-9967-45ce-b1ae-d7004ec8ebfc"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=930b6d97-5608-4f60-a29c-10c3d531311a"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question64",
          "title": "Sinto orgulho do impacto que a \"empresa\" tem nos nossos clientes…",
          "valueName": "promocao-da-marca",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=f01afe0a-41c3-463a-82ef-e97ee92088a8"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=20eb4666-58ff-42e5-9cfe-56c36fd3c460"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8dc2bef6-9967-45ce-b1ae-d7004ec8ebfc"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=930b6d97-5608-4f60-a29c-10c3d531311a"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question47",
          "title": "Você sente que tem oportunidade de crescer dentro da \"empresa\"?",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d1e20e94-7adb-4f5c-97fd-f9ba2df48bef"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cd9d5d0c-cd81-4bd2-9d36-ef2aea8c0321"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=1cd8adc2-a846-4e2c-a97d-24c9379c0a12"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e7797179-3dd8-4a7a-b814-a716eb1ec7b1"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question51",
          "title": "Na sua opinião, você possui um plano de carreira claro?",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d1e20e94-7adb-4f5c-97fd-f9ba2df48bef"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cd9d5d0c-cd81-4bd2-9d36-ef2aea8c0321"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=1cd8adc2-a846-4e2c-a97d-24c9379c0a12"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e7797179-3dd8-4a7a-b814-a716eb1ec7b1"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question53",
          "title": "Tenho boas oportunidades de carreira e crescimento na empresa.",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d1e20e94-7adb-4f5c-97fd-f9ba2df48bef"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=cd9d5d0c-cd81-4bd2-9d36-ef2aea8c0321"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=1cd8adc2-a846-4e2c-a97d-24c9379c0a12"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e7797179-3dd8-4a7a-b814-a716eb1ec7b1"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question48",
          "title": "Tenho um plano de desenvolvimento com o objetivo de aprimorar os meus pontos fortes…",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5aa63120-57a5-4348-8733-3fa03a49cc89"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=85ccd252-177b-4b9d-a9cc-53d25d340ef6"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5d8305ef-64fa-4239-a092-89cd470c87e4"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7f9300b7-d3ce-4d48-8a66-19bb93ff53c5"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question49",
          "title": "Percebo que minhas habilidades estão sendo aprimoradas diariamente…",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3ff06aeb-4023-4902-be61-f4241ea02e7b"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7f2d7714-11b4-46e6-8295-c039d2902df1"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=72e20200-a7f6-45f5-8b08-1d18ebb8b0e9"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=01c3f05a-79c2-4b62-8130-fce166ae2e7b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question61",
          "title": "Você sente que faz bom uso de seus conhecimentos na sua atual função?",
          "valueName": "papel-na-organizacao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3ff06aeb-4023-4902-be61-f4241ea02e7b"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7f2d7714-11b4-46e6-8295-c039d2902df1"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=72e20200-a7f6-45f5-8b08-1d18ebb8b0e9"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=01c3f05a-79c2-4b62-8130-fce166ae2e7b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question62",
          "title": "Você sente que faz bom uso de suas habilidades na sua atual função?",
          "valueName": "papel-na-organizacao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3ff06aeb-4023-4902-be61-f4241ea02e7b"
            },
            {
              "value": "Image 2",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7f2d7714-11b4-46e6-8295-c039d2902df1"
            },
            {
              "value": "Image 3",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=72e20200-a7f6-45f5-8b08-1d18ebb8b0e9"
            },
            {
              "value": "Image 4",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=01c3f05a-79c2-4b62-8130-fce166ae2e7b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question50",
          "title": "A \"empresa\" está disposta a investir nos seus pontos fortes?",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ec288b82-f2fb-477f-9554-ed041df5f8d3"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=67524212-1d3c-4520-b2ac-908318382540"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5308cfe9-da40-4d49-bf52-5e3e49d587b2"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=2aa1eb46-c46e-48a5-ab46-0c2fb3caad2b"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question52",
          "title": "A \"empresa\" oferece treinamentos e outras formas de desenvolvimento para auxiliar no meu crescimento profissional…",
          "valueName": "maestria",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=74e46555-cc6c-4d0b-a61a-7d8cb4ca6c76"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b4907821-fd00-43f7-b702-bbc4e4f2a25e"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e60024ac-a90c-4cc3-b8d3-1d5d34d340c7"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=15b5545e-460b-405a-a75b-7aad8c834410"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question72",
          "title": "Você sente orgulho de algo que realizou esta semana envolvendo seu trabalho?",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=74e46555-cc6c-4d0b-a61a-7d8cb4ca6c76"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b4907821-fd00-43f7-b702-bbc4e4f2a25e"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e60024ac-a90c-4cc3-b8d3-1d5d34d340c7"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=15b5545e-460b-405a-a75b-7aad8c834410"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question76",
          "title": "Você se sente feliz trabalhando aqui?",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=74e46555-cc6c-4d0b-a61a-7d8cb4ca6c76"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b4907821-fd00-43f7-b702-bbc4e4f2a25e"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e60024ac-a90c-4cc3-b8d3-1d5d34d340c7"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=15b5545e-460b-405a-a75b-7aad8c834410"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question77",
          "title": "A \"empresa\" preocupa com a minha saúde psicológica…",
          "valueName": "saude-pessoal",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=74e46555-cc6c-4d0b-a61a-7d8cb4ca6c76"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b4907821-fd00-43f7-b702-bbc4e4f2a25e"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e60024ac-a90c-4cc3-b8d3-1d5d34d340c7"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=15b5545e-460b-405a-a75b-7aad8c834410"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question80",
          "title": "Se a \"empresa\" fosse uma pessoa, eu descreveria ela como sendo alguém psicologicamente saudável…",
          "valueName": "saude-pessoal",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=74e46555-cc6c-4d0b-a61a-7d8cb4ca6c76"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b4907821-fd00-43f7-b702-bbc4e4f2a25e"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e60024ac-a90c-4cc3-b8d3-1d5d34d340c7"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=15b5545e-460b-405a-a75b-7aad8c834410"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question81",
          "title": "No geral, como se sente a respeito do seu nível de estresse no trabalho?",
          "valueName": "saude-pessoal",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Muito estresse",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e16746d7-2ae8-4cb9-95c5-e34dc340dacd"
            },
            {
              "value": "Image 3",
              "text": "Estresse moderado",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=bc321ffe-49f8-46cf-92cc-f8c3ce748ff8"
            },
            {
              "value": "Image 4",
              "text": "Pouco estresse...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=42afdf03-4e7d-4384-bd32-64a8de73e666"
            },
            {
              "value": "Image 2",
              "text": "Nada estressado!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ecbcb6b8-c34d-45a5-8e31-db086a3a03a5"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question6",
          "title": {
            "default": "No geral, como se sente a respeito do seu nível de estresse no trabalho?",
            "pt-br": "Ultimamente, você sente que o seu trabalho vem atrapalhando ou ajudando a sua vida pessoal?"
          },
          "valueName": "equilibrio-vida-pessoal-profissional",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Muito estresse",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e16746d7-2ae8-4cb9-95c5-e34dc340dacd"
            },
            {
              "value": "Image 3",
              "text": "Estresse moderado",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=bc321ffe-49f8-46cf-92cc-f8c3ce748ff8"
            },
            {
              "value": "Image 4",
              "text": "Pouco estresse...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=42afdf03-4e7d-4384-bd32-64a8de73e666"
            },
            {
              "value": "Image 2",
              "text": "Nada estressado!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=ecbcb6b8-c34d-45a5-8e31-db086a3a03a5"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question78",
          "title": "A \"empresa\" preocupa com a minha saúde física…",
          "valueName": "saude-pessoal",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=09f3d425-1981-4622-86a0-2579e50585c2"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3c22f1e8-b2be-400a-b234-22a659d2f58b"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=8595fe68-594e-49cb-8305-77144ebf40b0"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5837c596-a447-4784-90f5-d98f08eb5ff2"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question73",
          "title": "Você sente que o seu trabalho é uma extensão de sua personalidade?",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0b8f0659-cb4c-43d7-81b3-2f31bdbabed8"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=22ef99b9-d53b-41c5-a310-97b1aed080a1"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=4b0d84ec-3dce-4e07-9f2f-9f7a1eb56901"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=32d2543c-1712-45ae-8c7e-9818e8693b01"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question74",
          "title": "Meu trabalho não é só um “emprego”…é uma fonte de energia…",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0b8f0659-cb4c-43d7-81b3-2f31bdbabed8"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=22ef99b9-d53b-41c5-a310-97b1aed080a1"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=4b0d84ec-3dce-4e07-9f2f-9f7a1eb56901"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=32d2543c-1712-45ae-8c7e-9818e8693b01"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question104",
          "title": "Consigo manter um equilíbrio saudável entre o trabalho e a minha vida pessoal…",
          "valueName": "equilibrio-vida-pessoal-profissional",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0b8f0659-cb4c-43d7-81b3-2f31bdbabed8"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=22ef99b9-d53b-41c5-a310-97b1aed080a1"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=4b0d84ec-3dce-4e07-9f2f-9f7a1eb56901"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=32d2543c-1712-45ae-8c7e-9818e8693b01"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question54",
          "title": "Os objetivos e as estratégias da \"empresa\" estão nos levando na direção certa…",
          "valueName": "missao-e-visao",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a1461cb1-7ae1-40b4-b565-cc84e3028c16"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=5d8ea93e-a4fa-4bf2-86e1-f26a73d10d96"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=174565ef-f58c-4642-b827-1e9a7fcddc9b"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=4efbb174-ff88-42fb-a377-12a3e15e2672"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question57",
          "title": "Sinto orgulho do que a \"empresa\" representa lá fora…",
          "valueName": "orgulho-da-marca",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=90cf5bd8-d030-440c-848e-af2223d2fd0a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d00be04e-7c2f-44cf-83ec-92b9ad98db33"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b8efc096-7869-4fb1-b2bb-04e48a619a45"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a30073b4-1be2-4c64-9295-9102ff650854"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question105",
          "title": {
            "default": "Sinto orgulho do que a \"empresa\" representa lá fora…",
            "pt-br": "Estou orgulhoso do que a \"empresa\" devolve para a sociedade…"
          },
          "valueName": "etica-responsabilidade-social",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=90cf5bd8-d030-440c-848e-af2223d2fd0a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d00be04e-7c2f-44cf-83ec-92b9ad98db33"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b8efc096-7869-4fb1-b2bb-04e48a619a45"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a30073b4-1be2-4c64-9295-9102ff650854"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question63",
          "title": "Tenho orgulho de vestir a camisa da empresa lá fora…",
          "valueName": "promocao-da-marca",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=90cf5bd8-d030-440c-848e-af2223d2fd0a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d00be04e-7c2f-44cf-83ec-92b9ad98db33"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b8efc096-7869-4fb1-b2bb-04e48a619a45"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a30073b4-1be2-4c64-9295-9102ff650854"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question58",
          "title": "Você sente orgulho da marca que representa?",
          "valueName": "orgulho-da-marca",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=90cf5bd8-d030-440c-848e-af2223d2fd0a"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=d00be04e-7c2f-44cf-83ec-92b9ad98db33"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b8efc096-7869-4fb1-b2bb-04e48a619a45"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=a30073b4-1be2-4c64-9295-9102ff650854"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question66",
          "title": "O feedback que recebe é relevante?",
          "valueName": "qualidade-do-feedback",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0386ec23-1f65-4b88-8878-8f41fecc1d87"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=e4649526-c76c-434e-b20c-191adb1f87fb"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=aec9aa02-2c87-4ffd-bc98-c4a3b29a08a1"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=0ef850d7-a977-4b3b-b2ec-ec8ce7da3d9f"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question67",
          "title": "Na sua opinião, qual imagem melhor representa o seu nível de engajamento com a empresa?",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Desengajado",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7bf340d1-5648-478c-bd70-ffed21cb6dc6"
            },
            {
              "value": "Image 3",
              "text": "Pouco Engajado",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b94164ee-6ce8-4860-bb3f-edfd0343825c"
            },
            {
              "value": "Image 4",
              "text": "Engajado",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c2475469-a89d-4613-99a1-8ce48d971a66"
            },
            {
              "value": "Image 2",
              "text": "Muito Engajado",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=35fdf536-29db-4cb1-96bd-62842153d5e3"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question106",
          "title": {
            "default": "Na sua opinião, qual imagem melhor representa o seu nível de engajamento com a empresa?",
            "pt-br": "Alguém diria ou faria algo se percebesse que preciso de ajuda no trabalho…"
          },
          "valueName": "harmonia-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": {
                "default": "Desengajado",
                "pt-br": "Não, nem um pouco."
              },
              "imageLink": {
                "default": "https://api.surveyjs.io/private/Surveys/files?name=7bf340d1-5648-478c-bd70-ffed21cb6dc6",
                "pt-br": "https://api.surveyjs.io/private/Surveys/files?name=6ad46713-6911-4ec1-a016-762a7c0e3a74"
              }
            },
            {
              "value": "Image 3",
              "text": {
                "default": "Pouco Engajado",
                "pt-br": "Acredito que não..."
              },
              "imageLink": {
                "default": "https://api.surveyjs.io/private/Surveys/files?name=b94164ee-6ce8-4860-bb3f-edfd0343825c",
                "pt-br": "https://api.surveyjs.io/private/Surveys/files?name=8c4f17d9-dec8-4298-a1a1-394f24ccd38b"
              }
            },
            {
              "value": "Image 4",
              "text": {
                "default": "Engajado",
                "pt-br": "Acredito que sim..."
              },
              "imageLink": {
                "default": "https://api.surveyjs.io/private/Surveys/files?name=c2475469-a89d-4613-99a1-8ce48d971a66",
                "pt-br": "https://api.surveyjs.io/private/Surveys/files?name=55aa1e52-63aa-43d2-8c09-0f8d7dd464e6"
              }
            },
            {
              "value": "Image 2",
              "text": {
                "default": "Muito Engajado",
                "pt-br": "Sim, com certeza!"
              },
              "imageLink": {
                "default": "https://api.surveyjs.io/private/Surveys/files?name=35fdf536-29db-4cb1-96bd-62842153d5e3",
                "pt-br": "https://api.surveyjs.io/private/Surveys/files?name=58b218af-cbb7-4d78-89b2-aee72dcf1cad"
              }
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question79",
          "title": "Se a \"empresa\" fosse uma pessoa, eu descreveria ela como sendo alguém fisicamente saudável…",
          "valueName": "saude-pessoal",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7bf340d1-5648-478c-bd70-ffed21cb6dc6"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b94164ee-6ce8-4860-bb3f-edfd0343825c"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim...",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c2475469-a89d-4613-99a1-8ce48d971a66"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=35fdf536-29db-4cb1-96bd-62842153d5e3"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question75",
          "title": "As pessoas aqui estão motivadas para trabalhar…",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7bf340d1-5648-478c-bd70-ffed21cb6dc6"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b94164ee-6ce8-4860-bb3f-edfd0343825c"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c2475469-a89d-4613-99a1-8ce48d971a66"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=35fdf536-29db-4cb1-96bd-62842153d5e3"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "imagepicker",
          "name": "question102",
          "title": "As pessoas aqui estão dispostas a dar mais de si para concluir uma tarefa…",
          "valueName": "colaboracao-com-colegas",
          "isRequired": true,
          "choices": [
            {
              "value": "Image 1",
              "text": "Não, nem um pouco.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7bf340d1-5648-478c-bd70-ffed21cb6dc6"
            },
            {
              "value": "Image 3",
              "text": "Acredito que não.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=b94164ee-6ce8-4860-bb3f-edfd0343825c"
            },
            {
              "value": "Image 4",
              "text": "Acredito que sim.",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=c2475469-a89d-4613-99a1-8ce48d971a66"
            },
            {
              "value": "Image 2",
              "text": "Sim, com certeza!",
              "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=35fdf536-29db-4cb1-96bd-62842153d5e3"
            }
          ],
          "imageFit": "cover",
          "showLabel": true
        },
        {
          "type": "boolean",
          "name": "question55",
          "title": "Você acredita que a empresa é capaz de alcançar os objetivos/metas propostos para este ano?",
          "valueName": "missao-e-visao",
          "isRequired": true,
          "showCommentArea": true,
          "commentText": "Comente sobre sua resposta:",
          "labelTrue": "Sim",
          "labelFalse": "Não"
        },
        {
          "type": "boolean",
          "name": "question103",
          "title": "Quando algo inesperado acontece, você sabe a quem recorrer?",
          "valueName": "confianca-no-gestor",
          "isRequired": true,
          "showCommentArea": true,
          "commentText": "Comente sobre sua resposta:",
          "labelTrue": "Sim",
          "labelFalse": "Não"
        },
        {
          "type": "boolean",
          "name": "question59",
          "title": "Suas responsabilidades estão claras?",
          "valueName": "papel-na-organizacao",
          "isRequired": true,
          "showCommentArea": true,
          "commentText": "Comente sobre sua resposta:",
          "labelTrue": "Sim",
          "labelFalse": "Não"
        },
        {
          "type": "boolean",
          "name": "question60",
          "title": "Você sente que a sua função possui uma conexão direta com o propósito da “empresa\"?",
          "valueName": "papel-na-organizacao",
          "isRequired": true,
          "showCommentArea": true,
          "commentText": "Comente sobre sua resposta:",
          "labelTrue": "Sim",
          "labelFalse": "Não"
        },
        {
          "type": "boolean",
          "name": "question65",
          "title": "Você acredita no propósito da \"empresa\"?",
          "valueName": "proposito",
          "isRequired": true,
          "showCommentArea": true,
          "commentText": "Comente sobre sua resposta:",
          "labelTrue": "Sim",
          "labelFalse": "Não"
        },
        {
          "type": "rating",
          "name": "question83",
          "title": "Os meus colegas estão comprometidos em fazer um trabalho de qualidade…",
          "valueName": "colaboracao-com-colegas",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question84",
          "title": "Faço parte de uma equipe de alta performance…",
          "valueName": "colaboracao-com-colegas",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question85",
          "title": "Sinto que minhas opiniões fazem a diferença no trabalho…",
          "valueName": "comunicacao-com-gestor",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question86",
          "title": "Meu supervisor ou alguém no trabalho valoriza minha pessoa…",
          "valueName": "confianca-no-gestor",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question87",
          "title": "Existe alguém no trabalho que encoraja o meu desenvolvimento…",
          "valueName": "confianca-nos-colegas",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question88",
          "title": "No geral, como avalia o nível de felicidade de todos no ambiente de trabalho?",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question89",
          "title": "Neste último ano tive oportunidades de aprender e crescer no trabalho…",
          "valueName": "maestria",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question91",
          "title": "A missão ou propósito da \"empresa\" traz significado para o meu trabalho…",
          "valueName": "proposito",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question92",
          "title": "Recebo feedback que ajuda a melhorar minha performance.",
          "valueName": "qualidade-do-feedback",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question93",
          "title": "Sempre que possível, a \"empresa\" comemora nossas conquistas…",
          "valueName": "qualidade-do-reconhecimento",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question94",
          "title": "Fui reconhecido ou elogiado recentemente por um trabalho bem-feito…",
          "valueName": "qualidade-do-reconhecimento",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question95",
          "title": "No trabalho, tenho a oportunidade de contribuir com o meu melhor - todos os dias…",
          "valueName": "realizacao-no-trabalho",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question96",
          "title": "A \"empresa\" preocupa com a minha segurança psicológica…",
          "valueName": "saude-pessoal",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question90",
          "title": "Se a empresa fosse um aplicativo, qual seria a nota de satisfação dos usuários?",
          "valueName": "promocao-da-marca",
          "isRequired": true,
          "rateType": "stars"
        },
        {
          "type": "rating",
          "name": "question97",
          "title": "Sinto que tenho autonomia quando se trata do meu trabalho…",
          "valueName": "autonomia",
          "rateType": "smileys"
        },
        {
          "type": "rating",
          "name": "question100",
          "title": "A liderança está sempre buscando maneiras de melhorar a forma de executar o trabalho.",
          "valueName": "colaboracao-com-gestor",
          "isRequired": true,
          "showCommentArea": true,
          "commentText": "Comente sobre sua resposta:",
          "rateType": "smileys"
        },
        {
          "type": "rating",
          "name": "question101",
          "title": "A minha equipe está sempre disposta a ajudar quando alguém precisa…",
          "valueName": "colaboracao-com-colegas",
          "isRequired": true,
          "showCommentArea": true,
          "commentText": "Comente sobre sua resposta:",
          "rateType": "smileys"
        },
        {
          "type": "boolean",
          "name": "question98",
          "title": "Você sente que tem liberdade suficiente para decidir como e onde fazer o seu trabalho?",
          "valueName": "autonomia",
          "labelTrue": "Sim",
          "labelFalse": "Não"
        },
        {
          "type": "boolean",
          "name": "question99",
          "title": "Você possui flexibilidade para se ausentar quando precisa?",
          "valueName": "autonomia",
          "labelTrue": "Sim",
          "labelFalse": "Não"
        }
      ]
    }
  ],
  "cookieName": "CERTA2024-1",
  "sendResultOnPageNext": true,
  "questionsOrder": "random",
  "showQuestionNumbers": "off",
  "showProgressBar": "bottom",
  "progressBarType": "questions",
  "maxTextLength": 300,
  "maxOthersLength": 300,
  "startSurveyText": "Iniciar",
  "pagePrevText": "Voltar",
  "pageNextText": {
    "default": "Avançar",
    "pt-br": "Confirmar"
  },
  "completeText": "Concluir",
  "firstPageIsStarted": true,
  "questionsOnPageMode": "questionPerPage",
  "widthMode": "responsive"
}
