import { useState, useEffect } from 'react';
import './App.css'
import fotoEpitacio from './fotoepitacio.png'
import fotoEpitacio2 from './fotoepitacio2.png'


function App() {
  const [activeSection, setActiveSection] = useState('biografia');
  const [expandedCard, setExpandedCard] = useState(null);

useEffect(() => {
  const titles = {
    biografia: 'Epitácio Pessoa - Biografia',
    presidencia: 'Epitácio Pessoa - Presidência',
    carreira: 'Epitácio Pessoa - Carreira',
    legado: 'Epitácio Pessoa - Legado'
  };
  
  document.title = titles[activeSection] || 'Epitácio Pessoa - 11º Presidente do Brasil';
  
}, [activeSection]);
  const sections = [
    { id: 'biografia', name: 'Biografia', icon: '👤' },
    { id: 'presidencia', name: 'Presidência', icon: '🏆' },
    { id: 'carreira', name: 'Carreira', icon: '📚' },
    { id: 'legado', name: 'Legado', icon: '🌍' }
  ];

  const achievements = [
    {
      title: "Rompimento com o Café com Leite",
      description: "Quebrou o sistema político que alternava poder entre São Paulo e Minas Gerais",
      year: "1919-1922",
      icon: "⚖️"
    },
    {
      title: "Obras contra a Seca",
      description: "Implementou importantes obras de combate à seca no Nordeste",
      year: "1920-1922",
      icon: "🌊"
    },
    {
      title: "Missão Diplomática",
      description: "Representou o Brasil na Conferência de Paz de Paris após a Primeira Guerra Mundial",
      year: "1918-1919",
      icon: "🕊️"
    },
    {
      title: "Modernização do País",
      description: "Promoveu reformas importantes na infraestrutura e educação brasileira",
      year: "1919-1922",
      icon: "🏗️"
    }
  ];

  const timeline = [
    { year: "1865", event: "Nascimento em Umbuzeiro, Paraíba" },
    { year: "1872", event: "Órfão aos 7 anos, criado pelo tio Barão de Lucena" },
    { year: "1886", event: "Formou-se em Direito pela Faculdade de Direito do Recife" },
    { year: "1890", event: "Eleito deputado federal pela Paraíba" },
    { year: "1902", event: "Eleito senador pela Paraíba" },
    { year: "1918", event: "Chefia a delegação brasileira na Conferência de Paz de Paris" },
    { year: "1919", event: "Eleito Presidente da República" },
    { year: "1919-1922", event: "Exerceu a presidência do Brasil" },
    { year: "1942", event: "Faleceu em Petrópolis, Rio de Janeiro" }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={fotoEpitacio} 
                  alt="Epitácio Pessoa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Epitácio Pessoa</h1>
                <p className="text-gray-600">11º Presidente do Brasil (1919-1922)</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Navegação Mobile */}
      <div className="block md:hidden bg-white shadow-sm border-b border-gray-200">
        <div className="overflow-x-auto">
          <div className="flex space-x-2 p-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left lg:flex-1">
              <h2 className="text-5xl font-bold mb-6">
                Epitácio Lindolfo da Silva Pessoa
              </h2>
              <p className="text-xl mb-8 max-w-3xl">
                Político, diplomata, jurista e presidente que rompeu com o sistema oligárquico
                e trabalhou pelo desenvolvimento do Brasil no início do século XX.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📅</span>
                  <span>1865 - 1942</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📍</span>
                  <span>Umbuzeiro, Paraíba</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏆</span>
                  <span>11º Presidente do Brasil</span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src={fotoEpitacio} 
                  alt="Epitácio Pessoa - 11º Presidente do Brasil" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Biography Section */}
        {activeSection === 'biografia' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="w-full max-w-sm mx-auto">
                    <img 
                      src={fotoEpitacio2} 
                      alt="Epitácio Pessoa" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <p className="text-center text-gray-600 mt-4 text-sm">
                      Epitácio Lindolfo da Silva Pessoa<br/>
                      11º Presidente do Brasil (1919-1922)
                    </p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Biografia</h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Epitácio Lindolfo da Silva Pessoa nasceu em Umbuzeiro, na Paraíba, em 23 de maio de 1865. Aos sete anos de idade perdeu os pais, tendo sua criação ficado aos cuidados de seu tio Henrique Pereira de Lucena, o barão de Lucena, que foi presidente da província de Pernambuco no Império e ministro da Fazenda do governo republicano de Deodoro da Fonseca.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Descendente de proprietários rurais, Epitácio recebeu uma educação primorosa. Formou-se em Direito pela Faculdade de Direito do Recife em 1886, onde se destacou como aluno brilhante. Sua carreira política começou cedo, sendo eleito deputado federal pela Paraíba em 1890.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Foi presidente da República do Brasil entre 28 de julho de 1919 e 15 de novembro de 1922, durante um período turbulento da história brasileira, marcado por revoltas militares e transformações sociais importantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Linha do Tempo</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center mb-8">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="ml-6">
                      <div className="text-blue-600 font-semibold">{item.year}</div>
                      <div className="text-gray-700">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Presidency Section */}
        {activeSection === 'presidencia' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Presidência (1919-1922)</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Governou o país de 1919 a 1922, durante o período conhecido como República Velha, após o breve mandato do mineiro Delfim Moreira. Rompeu com o sistema político chamado de "café com leite", cuja oligarquia paulista e mineira alternavam o poder.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Epitácio Pessoa foi eleito quando estava na França, devido à Conferência de Paz de Paris, onde representou o Brasil nas negociações do pós-Primeira Guerra Mundial. Sua eleição representou uma quebra no tradicional sistema oligárquico brasileiro.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Durante seu governo, enfrentou diversos desafios, incluindo revoltas militares e problemas econômicos. Implementou importantes obras de combate à seca no Nordeste e promoveu a modernização de várias estruturas do país.
                </p>
              </div>
            </div>

            {/* Achievements Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600 mb-3">{achievement.description}</p>
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Career Section */}
        {activeSection === 'carreira' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Carreira Política e Profissional</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Início da Carreira</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Formação em Direito pela Faculdade de Direito do Recife (1886)</li>
                    <li>• Promotor público e advogado</li>
                    <li>• Professor de Direito</li>
                    <li>• Deputado federal pela Paraíba (1890)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Cargos Principais</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Senador pela Paraíba (1902-1918)</li>
                    <li>• Ministro da Justiça (1898-1901)</li>
                    <li>• Chefe da delegação brasileira na Conferência de Paz de Paris (1918-1919)</li>
                    <li>• Presidente da República (1919-1922)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Atuação Diplomática</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Uma das maiores contribuições de Epitácio Pessoa foi sua atuação diplomática. Como chefe da delegação brasileira na Conferência de Paz de Paris, ele ajudou a posicionar o Brasil no cenário internacional pós-Primeira Guerra Mundial.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sua experiência diplomática foi fundamental para sua eleição à presidência, já que estava na França representando o país quando foi escolhido para liderar a nação.
              </p>
            </div>
          </div>
        )}

        {/* Legacy Section */}
        {activeSection === 'legado' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Legado e Importância Histórica</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Rompimento Oligárquico</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Epitácio Pessoa foi o primeiro presidente a romper com o sistema "café com leite", 
                    que alternava o poder entre as oligarquias de São Paulo e Minas Gerais. Sua eleição 
                    representou uma renovação política importante no Brasil da República Velha.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Obras contra a Seca</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Implementou importantes obras de combate à seca no Nordeste, demonstrando 
                    preocupação com o desenvolvimento regional e com as necessidades das populações 
                    mais carentes do país.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Inserção Internacional</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Sua atuação diplomática ajudou a posicionar o Brasil no cenário internacional, 
                    especialmente após a Primeira Guerra Mundial, contribuindo para o prestígio 
                    do país nas relações exteriores.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-white">
              <h4 className="text-2xl font-semibold mb-4">Morte e Memória</h4>
              <p className="text-lg leading-relaxed">
                Epitácio Pessoa faleceu aos 76 anos, na cidade de Petrópolis (Rio de Janeiro) em 13 de fevereiro de 1942. 
                Sua memória é preservada como a de um estadista íntegro que buscou modernizar o Brasil 
                e romper com as estruturas oligárquicas de seu tempo.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Epitácio Pessoa</h3>
            <p className="text-gray-400 mb-4">
              11º Presidente do Brasil • 1865-1942
            </p>
            <p className="text-gray-400">
              "Um estadista que rompeu com as oligarquias e trabalhou pelo desenvolvimento nacional"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App