import React, { Component } from 'react';
import Axios from 'axios';
import './Board.css'
import Tile from './Tile.js';
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ddragonVersion: "12.13.1",
            champions: [
                {'id': 'Aatrox', 'name': 'Aatrox'}, {'id': 'Ahri', 'name': 'Ahri'}, {'id': 'Akali', 'name': 'Akali'}, 
                {'id': 'Akshan', 'name': 'Akshan'}, {'id': 'Alistar', 'name': 'Alistar'}, {'id': 'Amumu', 'name': 'Amumu'}, 
                {'id': 'Anivia', 'name': 'Anivia'}, {'id': 'Annie', 'name': 'Annie'}, {'id': 'Aphelios', 'name': 'Aphelios'}, 
                {'id': 'Ashe', 'name': 'Ashe'}, {'id': 'AurelionSol', 'name': 'Aurelion Sol'}, {'id': 'Azir', 'name': 'Azir'}, 
                {'id': 'Bard', 'name': 'Bard'}, {'id': 'Belveth', 'name': "Bel'Veth"}, {'id': 'Blitzcrank', 'name': 'Blitzcrank'}, 
                {'id': 'Brand', 'name': 'Brand'}, {'id': 'Braum', 'name': 'Braum'}, {'id': 'Caitlyn', 'name': 'Caitlyn'}, 
                {'id': 'Camille', 'name': 'Camille'}, {'id': 'Cassiopeia', 'name': 'Cassiopeia'}, {'id': 'Chogath', 'name': "Cho'Gath"}, 
                {'id': 'Corki', 'name': 'Corki'}, {'id': 'Darius', 'name': 'Darius'}, {'id': 'Diana', 'name': 'Diana'}, 
                {'id': 'Draven', 'name': 'Draven'}, {'id': 'DrMundo', 'name': 'Dr. Mundo'}, {'id': 'Ekko', 'name': 'Ekko'}, 
                {'id': 'Elise', 'name': 'Elise'}, {'id': 'Evelynn', 'name': 'Evelynn'}, {'id': 'Ezreal', 'name': 'Ezreal'}, 
                {'id': 'Fiddlesticks', 'name': 'Fiddlesticks'}, {'id': 'Fiora', 'name': 'Fiora'}, {'id': 'Fizz', 'name': 'Fizz'}, 
                {'id': 'Galio', 'name': 'Galio'}, {'id': 'Gangplank', 'name': 'Gangplank'}, {'id': 'Garen', 'name': 'Garen'}, 
                {'id': 'Gnar', 'name': 'Gnar'}, {'id': 'Gragas', 'name': 'Gragas'}, {'id': 'Graves', 'name': 'Graves'}, 
                {'id': 'Gwen', 'name': 'Gwen'}, {'id': 'Hecarim', 'name': 'Hecarim'}, {'id': 'Heimerdinger', 'name': 'Heimerdinger'}, 
                {'id': 'Illaoi', 'name': 'Illaoi'}, {'id': 'Irelia', 'name': 'Irelia'}, {'id': 'Ivern', 'name': 'Ivern'}, 
                {'id': 'Janna', 'name': 'Janna'}, {'id': 'JarvanIV', 'name': 'Jarvan IV'}, {'id': 'Jax', 'name': 'Jax'}, 
                {'id': 'Jayce', 'name': 'Jayce'}, {'id': 'Jhin', 'name': 'Jhin'}, {'id': 'Jinx', 'name': 'Jinx'}, 
                {'id': 'Kaisa', 'name': "Kai'Sa"}, {'id': 'Kalista', 'name': 'Kalista'}, {'id': 'Karma', 'name': 'Karma'}, 
                {'id': 'Karthus', 'name': 'Karthus'}, {'id': 'Kassadin', 'name': 'Kassadin'}, {'id': 'Katarina', 'name': 'Katarina'}, 
                {'id': 'Kayle', 'name': 'Kayle'}, {'id': 'Kayn', 'name': 'Kayn'}, {'id': 'Kennen', 'name': 'Kennen'}, 
                {'id': 'Khazix', 'name': "Kha'Zix"}, {'id': 'Kindred', 'name': 'Kindred'}, {'id': 'Kled', 'name': 'Kled'}, 
                {'id': 'KogMaw', 'name': "Kog'Maw"}, {'id': 'Leblanc', 'name': 'LeBlanc'}, {'id': 'LeeSin', 'name': 'Lee Sin'}, 
                {'id': 'Leona', 'name': 'Leona'}, {'id': 'Lillia', 'name': 'Lillia'}, {'id': 'Lissandra', 'name': 'Lissandra'}, 
                {'id': 'Lucian', 'name': 'Lucian'}, {'id': 'Lulu', 'name': 'Lulu'}, {'id': 'Lux', 'name': 'Lux'}, 
                {'id': 'Malphite', 'name': 'Malphite'}, {'id': 'Malzahar', 'name': 'Malzahar'}, {'id': 'Maokai', 'name': 'Maokai'}, 
                {'id': 'MasterYi', 'name': 'Master Yi'}, {'id': 'MissFortune', 'name': 'Miss Fortune'}, 
                {'id': 'MonkeyKing', 'name': 'Wukong'}, 
                {'id': 'Mordekaiser', 'name': 'Mordekaiser'}, {'id': 'Morgana', 'name': 'Morgana'}, {'id': 'Nami', 'name': 'Nami'}, 
                {'id': 'Nasus', 'name': 'Nasus'}, {'id': 'Nautilus', 'name': 'Nautilus'}, {'id': 'Neeko', 'name': 'Neeko'}, 
                {'id': 'Nidalee', 'name': 'Nidalee'}, {'id': 'Nilah', 'name': 'Nilah'}, {'id': 'Nocturne', 'name': 'Nocturne'}, 
                {'id': 'Nunu', 'name': 'Nunu&Willump'}, {'id': 'Olaf', 'name': 'Olaf'}, {'id': 'Orianna', 'name': 'Orianna'}, 
                {'id': 'Ornn', 'name': 'Ornn'}, {'id': 'Pantheon', 'name': 'Pantheon'}, {'id': 'Poppy', 'name': 'Poppy'}, 
                {'id': 'Pyke', 'name': 'Pyke'}, {'id': 'Qiyana', 'name': 'Qiyana'}, {'id': 'Quinn', 'name': 'Quinn'}, 
                {'id': 'Rakan', 'name': 'Rakan'}, {'id': 'Rammus', 'name': 'Rammus'}, {'id': 'RekSai', 'name': "Rek'Sai"}, 
                {'id': 'Rell', 'name': 'Rell'}, {'id': 'Renata', 'name': 'Renata Glasc'}, {'id': 'Renekton', 'name': 'Renekton'}, 
                {'id': 'Rengar', 'name': 'Rengar'}, {'id': 'Riven', 'name': 'Riven'}, {'id': 'Rumble', 'name': 'Rumble'}, 
                {'id': 'Ryze', 'name': 'Ryze'}, {'id': 'Samira', 'name': 'Samira'}, {'id': 'Sejuani', 'name': 'Sejuani'}, 
                {'id': 'Senna', 'name': 'Senna'}, {'id': 'Seraphine', 'name': 'Seraphine'}, {'id': 'Sett', 'name': 'Sett'}, 
                {'id': 'Shaco', 'name': 'Shaco'}, {'id': 'Shen', 'name': 'Shen'}, {'id': 'Shyvana', 'name': 'Shyvana'}, 
                {'id': 'Singed', 'name': 'Singed'}, {'id': 'Sion', 'name': 'Sion'}, {'id': 'Sivir', 'name': 'Sivir'}, 
                {'id': 'Skarner', 'name': 'Skarner'}, {'id': 'Sona', 'name': 'Sona'}, {'id': 'Soraka', 'name': 'Soraka'}, 
                {'id': 'Swain', 'name': 'Swain'}, {'id': 'Sylas', 'name': 'Sylas'}, {'id': 'Syndra', 'name': 'Syndra'}, 
                {'id': 'TahmKench', 'name': 'Tahm Kench'}, {'id': 'Taliyah', 'name': 'Taliyah'}, {'id': 'Talon', 'name': 'Talon'}, 
                {'id': 'Taric', 'name': 'Taric'}, {'id': 'Teemo', 'name': 'Teemo'}, {'id': 'Thresh', 'name': 'Thresh'}, 
                {'id': 'Tristana', 'name': 'Tristana'}, {'id': 'Trundle', 'name': 'Trundle'}, {'id': 'Tryndamere', 'name': 'Tryndamere'}, 
                {'id': 'TwistedFate', 'name': 'Twisted Fate'}, {'id': 'Twitch', 'name': 'Twitch'}, {'id': 'Udyr', 'name': 'Udyr'}, 
                {'id': 'Urgot', 'name': 'Urgot'}, {'id': 'Varus', 'name': 'Varus'}, {'id': 'Vayne', 'name': 'Vayne'}, 
                {'id': 'Veigar', 'name': 'Veigar'}, {'id': 'Velkoz', 'name': "Vel'Koz"}, {'id': 'Vex', 'name': 'Vex'}, 
                {'id': 'Vi', 'name': 'Vi'}, {'id': 'Viego', 'name': 'Viego'}, {'id': 'Viktor', 'name': 'Viktor'}, 
                {'id': 'Vladimir', 'name': 'Vladimir'}, {'id': 'Volibear', 'name': 'Volibear'}, {'id': 'Warwick', 'name': 'Warwick'}, 
                {'id': 'Xayah', 'name': 'Xayah'}, {'id': 'Xerath', 'name': 'Xerath'}, 
                {'id': 'XinZhao', 'name': 'Xin Zhao'}, {'id': 'Yasuo', 'name': 'Yasuo'}, {'id': 'Yone', 'name': 'Yone'}, 
                {'id': 'Yorick', 'name': 'Yorick'}, {'id': 'Yuumi', 'name': 'Yuumi'}, {'id': 'Zac', 'name': 'Zac'}, 
                {'id': 'Zed', 'name': 'Zed'}, {'id': 'Zeri', 'name': 'Zeri'}, {'id': 'Ziggs', 'name': 'Ziggs'}, 
                {'id': 'Zilean', 'name': 'Zilean'}, {'id': 'Zoe', 'name': 'Zoe'}, {'id': 'Zyra', 'name': 'Zyra'}
            ],
            baseCdnUrl: "https://ddragon.leagueoflegends.com/cdn",
            backImageSrc: "https://cdn.discordapp.com/attachments/989474022330884106/996966460142395392/unknown.png",
            championsToShow: 36,
            championIndicesToUse: [],
            championIndicesBatches: [[]],
            yourChampion: {
                id: "",
                name: "",
                portrait: "https://cdn.discordapp.com/attachments/989474022330884106/996966460142395392/unknown.png",
            },
            showHowToPlay: false,
        };
    }

    getChampionSplash = (championId, skinIndex) => {
        const url = `${this.state.baseCdnUrl}/img/champion/splash/${championId}_${skinIndex}.jpg`; // (0 means default skin)
        return url;
    }
    
    getChampionLoadingScreenImage = (championId, skinIndex) => {
        const url = `${this.state.baseCdnUrl}/img/champion/loading/${championId}_${skinIndex}.jpg`; // (0 means default skin)
        return url;
    }
    
    getChampionPortrait = (championId) => {
        const url = `${this.state.baseCdnUrl}/${this.state.ddragonVersion}/img/champion/${championId}.png`;
        return url;
    }

    getRandomChampion = () => {
        const rand_int = Math.floor(Math.random() * this.state.championIndicesToUse.length);
        const selected_champion_index = this.state.championIndicesToUse[rand_int];
        const selected_champion = this.state.champions[selected_champion_index];
        this.setState({
            yourChampion: {
                id: selected_champion.id,
                name: selected_champion.name,
                portrait: this.getChampionPortrait(selected_champion.id),
            }
        })
    }

    finishLoadingBoard = () => {
        this.batchChampionsForWindowSize();
        this.getRandomChampion();
    }

    batchChampionsForWindowSize = () => {
        function spliceIntoChunks(arr, chunkSize) {
            const res = [];
            while (arr.length > 0) {
                const chunk = arr.splice(0, chunkSize);
                res.push(chunk);
            }
            return res;
        }
        const TILE_WIDTH = 120 + 10 // 120px for the champion portrait, 10px for the margin
        const tilesPerRow = Math.floor(window.innerWidth / TILE_WIDTH);
        const championIndicesToUseCopy = Array.from(this.state.championIndicesToUse);
        const championIndicesBatches = spliceIntoChunks(championIndicesToUseCopy, tilesPerRow);
        this.setState({championIndicesBatches: championIndicesBatches});
    }

    shuffleArray = (array) => {
        let shuffledArray = array
            .map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value)
        return shuffledArray;
    }

    componentDidMount() {

        try {
            let ddragonVersion = this.state.ddragonVersion;
            let liveChampions = [];
            let doUseLiveValues = false;

            Axios.get("https://ddragon.leagueoflegends.com/api/versions.json")
            .then((response) => {
                ddragonVersion = response.data[0];
                this.setState({
                    ddragonVersion: response.data[0]
                })
            })
            .then(() => {
                Axios.get(`https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/champion.json`)
                .then(response => {
                    console.log("Received champion data from ddragon for version " + ddragonVersion);

                    for (const key in response.data.data) {
                        const championData = response.data.data[key];
                        liveChampions.push({
                            id: championData.id,
                            name: championData.name,
                        });
                    }
                    this.setState({champions: liveChampions})
                    doUseLiveValues = true;
                })
            })

            const queryParams = new URLSearchParams(window.location.search);
            const board = queryParams.get('board');
            if (board) {
                // Load board from seed
                try {
                    const championIndicesString = decodeURIComponent(board);
                    const championIndices = championIndicesString.split("-");
                    const indices = championIndices.map(index => parseInt(parseInt(index, 36).toString(10), 10));
                    // This method of validation requires that both clients have the same value for this.state.champions_to_show
                    // This will not work if users gain the ability to change the number of champions to show
                    if(indices.length !== this.state.championsToShow) {
                        throw new Error("The link you were sent was invalid! Or maybe it was copied wrong? Generating a new board.")
                    }
                    const shuffledIndices = this.shuffleArray(indices);
                    this.setState({championIndicesToUse: shuffledIndices}, () => {
                        this.finishLoadingBoard()
                    })
                    return;
                } catch (error) {
                    this.generateNewBoard();
                }
            }
            else {
                const champions = doUseLiveValues ? liveChampions : this.state.champions;

                const allChampionIndices = (new Array(champions.length)).fill(undefined).map((_, i) => i);
                const shuffledChampionIndices = this.shuffleArray(allChampionIndices);
                const selectedChampionIndices = shuffledChampionIndices.slice(0, this.state.championsToShow);
                this.setState({championIndicesToUse: selectedChampionIndices}, () => {
                    this.finishLoadingBoard();
                });

                const encodedChampionIndices = selectedChampionIndices.map(index => {return index.toString(36)});
                const encodedChampionIndicesString = encodeURIComponent(encodedChampionIndices.join("-"));
                window.history.pushState({}, null, `?board=${encodedChampionIndicesString}`)
            }

        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    generateNewBoard() {
        window.location.href = "/";
    }

    shareThisBoard() {
        if (!navigator.clipboard) {
            alert("Clipboard API not supported, sorry! Manually copy the URL to share this board.");
        }
        navigator.clipboard.writeText(window.location.href).then(function() {
            alert('Link copied to clipboard!');
        }, function(err) {
            alert('Could not copy text, sorry! Manually copy the URL to share this board.');
            console.log(err);
        });
    }
    
    // original plan, saved for progeny
    /*
    Main page -> play game
    -> "generate game link" -> click button
            -> randomly select 36 champions + b64 encode them (this is the url parameter)
            -> going to this link loads the game page with that set of 36 champions 
            -> (but randomly arranges them, + selects one of them as the player's champion)
        gives you a link that you can send to a friend
    */

    toggleHelp = () => {
        this.setState({showHowToPlay: !this.state.showHowToPlay});
    }

    render() {
        const getNewChampionButton = <button onClick={this.getRandomChampion}>GET A NEW CHAMPION</button>
        const generateNewBoardButton = <button onClick={this.generateNewBoard}>GENERATE A NEW BOARD</button>
        const shareButton = <button onClick={this.shareThisBoard}>SHARE THIS BOARD</button>;
        return(
            <div className={"centered"}>
                <h2>Your Champion</h2>
                <br/>
                <div className={"my-tile"}>
                    <Tile 
                        championId={this.state.yourChampion.id} 
                        championName={this.state.yourChampion.name} 
                        imageSrc={this.state.yourChampion.portrait} 
                        backImageSrc={this.state.backImageSrc}
                    />
                </div>
                <br/>
                <button onClick={this.toggleHelp}>{this.state.showHowToPlay ? "HIDE HELP" : "HOW TO PLAY"}</button>
                <br/>
                <span id="help">
                    { this.state.showHowToPlay === true &&
                    (
                    <div>
                        <br/>
                        The site has randomly selected 36 League of Legends champions and populated a game board with it.<br/><br/>
                        To play with somebody else, click {shareButton} (or, copy the URL in your search bar) and paste the copied link to the person you want to play with.<br/><br/>
                        Once you and who you want to play with are on the same URL, play <a href="https://www.youtube.com/watch?v=a76UPzU2VXM">a normal game of Guess Who</a>.<br/><br/>
                        If you want to play a new round with the same board, have all players click {getNewChampionButton}.<br/><br/>
                        If you want to play a round with a new board entirely, click {generateNewBoardButton} (make sure to share the new URL with every player via the SHARE button).<br/><br/>
                        Feel free to zoom out if you would like to see all the tiles without having to scroll up and down.<br/><br/>
                        Happy playing!<br/><br/>
                    </div>
                    )
                    }
                </span>
                <div className={"button-row-menu"}>
                    <span className={"button-row-child"}>{getNewChampionButton}</span>
                    <span className={"button-row-child"}>{shareButton}</span>
                    <span className={"button-row-child"}>{generateNewBoardButton}</span>
                </div>
                <div id="tiles" className={"my-tile tiles"}>
                    {
                        this.state.championIndicesBatches.map((championIndicesBatch, batchIndex) => {
                            return (
                                championIndicesBatch.map((championIndex, tileIndex) => {
                                    const champion = this.state.champions[championIndex];
                                    return (
                                        <Tile 
                                            key={tileIndex} 
                                            championId={champion.id} 
                                            championName={champion.name} 
                                            imageSrc={this.getChampionPortrait(champion.id)} 
                                            backImageSrc={this.state.backImageSrc}
                                        />
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withParams(Board);