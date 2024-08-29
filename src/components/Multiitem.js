import React, { Component } from 'react'
import Content from './Content'
export class Multiitem extends Component {
    articles=[{
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Jermaine Jenas: Presenter sacked from The One Show and Match of the Day by BBC",
        "description": "The ex-footballer says there are \"two sides to every story\" after he is taken off air by the BBC.",
        "url": "https://www.bbc.co.uk/news/articles/cy76pdz5152o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e33d/live/05406eb0-609f-11ef-ac2e-0dde5f4fd683.jpg",
        "publishedAt": "2024-08-23T12:07:19.3933815Z",
        "content": "Jenas made his footballing debut at the age of 17, and played for his boyhood team Nottingham Forest, then Spurs and Newcastle United. He went on to play 341 times, as well as making 21 appearances f… [+1329 chars]"
        },
        {
        "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
        },
        "author": null,
        "title": "Football latest: Transfer updates, European reaction and Premier League news conferences",
        "description": "All the latest football and transfer news, Europa & Conference League reaction and Premier League manager news conferences.",
        "url": "http://www.bbc.co.uk/sport/football/live/cze5wpwj473t",
        "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
        "publishedAt": "2024-08-23T07:37:15.1438708Z",
        "content": "Derek McInnes did not hold back after Kilmarnock slipped to a 2-0 defeat at FC Copenhagen, blaming a \"horrendous\" refereeing decision as his side slipped to a late defeat.\r\nThe games was goalless hea… [+788 chars]"
        },
        {
        "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
        },
        "author": "Jack Lacey-Hatton",
        "title": "AEW vs WWE is coming to the Premier League: how wrestling has found its way into English football, thanks to Bournemouth and Fulham",
        "description": "The two biggest wrestling companies in the world will go head-to-head.... via the Premier League",
        "url": "https://www.fourfourtwo.com/news/aew-vs-wwe-is-coming-to-the-premier-league-how-wrestling-has-found-its-way-into-english-football-thanks-to-bournemouth-and-fulham",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/3akSeh9diTNWn8RaGFGbiV-1200-80.jpg",
        "publishedAt": "2024-08-23T07:30:16Z",
        "content": "For a long time, the only thing the world of American professional football and Premier League football had in common was a monopoly of the Sky Sports channel schedule.\r\nOh and there was that weird r… [+3456 chars]"
        },
        {
        "source": {
        "id": "le-monde",
        "name": "Le Monde"
        },
        "author": "Damien Leloup, Brice Laemle",
        "title": "Les nouveaux tarifs de la Ligue 1 créent un appel d’air pour les diffusions pirates",
        "description": "Sur Telegram ou par le biais de boîtiers spécialisés, le piratage des matchs du championnat français connaît un regain notable malgré la mobilisation des diffuseurs, des télécoms et de la Ligue de football professionnel.",
        "url": "https://www.lemonde.fr/economie/article/2024/08/23/les-nouveaux-tarifs-de-la-ligue-1-creent-un-appel-d-air-pour-les-diffusions-pirates_6291186_3234.html",
        "urlToImage": "https://img.lemde.fr/2024/08/22/115/0/6309/4206/1440/960/60/0/15d8f45_1724336631090-000-36ed4fj.jpg",
        "publishedAt": "2024-08-23T04:00:17Z",
        "content": "Evolution des recherches sur Google, depuis un an, pour des moyens de regarder illégalement des matchs de Ligue 1. \r\nSur Google Trends, loutil qui permet de comparer lévolution du nombre de recherche… [+2702 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": null,
        "title": "Riley excited Carroll will teach at USC, hopes to utilize ex-coach - ESPN",
        "description": "USC coach Lincoln Riley said Wednesday he'd welcome any assistance Pete Carroll can give his football program while he's teaching at the school.",
        "url": "https://www.espn.com/college-football/story/_/id/40955746/usc-love-use-carroll-resource",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1219%2Fr1268534_2_1296x729_16%2D9.jpg",
        "publishedAt": "2024-08-22T22:00:00Z",
        "content": "Aug 22, 2024, 06:00 PM ET\r\nPete Carroll said earlier this week that part of his life after being coach of the Seattle Seahawks will include teaching a class at USC this spring.\r\nTrojans coach Lincoln… [+2160 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": "Adam Rittenberg",
        "title": "Iowa suspends football coach Kirk Ferentz for recruiting violation - ESPN",
        "description": "Iowa has suspended coach Kirk Ferentz and an assistant for one game after admitting to contacting a player and his family prior to him entering the transfer portal.",
        "url": "https://www.espn.com/college-football/story/_/id/40954625/iowa-suspends-football-coach-kirk-ferentz-recruiting-violation",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1125%2Fr1257563_1240x698_16%2D9.jpg",
        "publishedAt": "2024-08-22T19:41:00Z",
        "content": "Iowa football coach Kirk Ferentz and assistant Jon Budmayr are suspended for the Hawkeyes' season opener as part of a school-imposed penalty for a recruiting violation in late 2022.\r\nFerentz, the lon… [+2479 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": "Field Yates",
        "title": "2025 NFL mock draft: Early predictions for first-round picks - ESPN",
        "description": "With college football kicking off, let's project the first round of the 2025 draft. Could we see three QBs taken? Will NFL teams pursue defense early?",
        "url": "https://www.espn.com/nfl/draft2025/insider/story/_/id/40882531/2025-nfl-mock-draft-first-round-predictions-32-picks-field-yates",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0820%2Fnfl_field_yates_2025_mock_draft_16x9.jpg",
        "publishedAt": "2024-08-21T10:35:00Z",
        "content": "Football is back, with the 2024 college season kicking off with Week 0 on Saturday and the NFL season set to follow in a couple of weeks. For us, that means the countdown to next year's NFL draft is … [+21941 chars]"
        },
        {
        "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
        },
        "author": "David Kenyon",
        "title": "Unique Stats from the 2023 College Football Regular Season",
        "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
        "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
        "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
        "publishedAt": "2023-12-12T12:00:00Z",
        "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
        "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
        "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
        "publishedAt": "2020-04-27T07:20:43Z",
        "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }]
    constructor() {
        super();
        this.state = {
            articles: this.articles
        };
    }
  async  componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3e1eb0aaf71445eebbb5af3df1d2ef17"
      let data=await fetch(url)
      let parsedata=await data.json()
      console.log(parsedata)
      this.setState({articles:parsedata.articles})
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 style={{ color: "White" }}><b><i>NewsHunt</i></b>- Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((elements) => {
             return (
       <div className="col-md-4 my-3" key={elements.url}>
                     <Content
               title={elements.title}
              description={elements.description?elements.description.slice(0, 75):""}
              image={elements.urlToImage}
              newsurl={elements.url} />
              </div>
          );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Multiitem;