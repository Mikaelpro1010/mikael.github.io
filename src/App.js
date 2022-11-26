import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-danger">
        <div class="container-fluid">
          <img src='img/pokebola.png' class="rounded" width="50" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="welcome.html">Lista de Megas</a>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
      <body>
          <img class="mt-3 mb-5 rounded" src='img/pokemon_go.jpg' width="700" right="600" />
        <div class="d-flex justify-content-center">
            <div class="col-5 card text-white bg-info p-3">
              <p>Pokémon Go é um game mobile lançado para android pela empresa Niantic e se tornou uma febre no mundo todo e ainda é popular até os dias atuais.
              Além disso, uma de suas implementações foram as mega evoluções já então conhecidas no universo de Pokémon, deixando assim o game bem mais desafiador
              e divertido de se jogar.
              </p>
              <div>
              </div>
            </div>
        </div>
        <div class="mt-3 d-flex justify-content-center">
          <div class="d-flex col-5 text-white card bg-primary p-3">
              <h3 align="center">
              Maneiras de se adquirir um pokémon mega evoluido
              </h3>
            <li align="left" class="mt-3">MEGA REIDES:</li>
            <div class="col-12">
              <img src='img/mega.jpg' class="rounded" width="200" />
            </div>
            <p class="mt-2" align="justify">Em Pokémon Go existem locais no mapa chamado de Reides, onde os jogadores podem se reunir para batalharem contra os chefes de tais Reides.
            Sendo assim, existe uma probabilidade de surgir um pokémon mega evoluido em algum momento e dessa forma, caso o mesmo seja derrotado em batalha,
            o jogador poderá ter a oportunidade de capturá-lo.
            </p>
            <li align="left" class="mt-3">MEGA PEDRA:</li>
            <div class=" mt-2 col-12">
              <img src='img/mega_pedra.jpg' class="rounded" width="400" />
            </div>
            <p class="mt-2" align="justify">Outro método para conseguir um pokémon com mega evolução é utilizando uma mega pedra que pode ser adquirida através de algumas missões presentes no game,
              então com uma quantidade necessária de pedras seu pokémon que já está em sua última evolução poderá assim mega evoluir.
            </p>
            <div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
