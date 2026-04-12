import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen pt-24 pb-20"
        style={{
          background: 'linear-gradient(180deg, #fdf4f0 0%, #faf7f2 40%, #ffffff 100%)',
        }}
      >
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            to="/"
            id="legal-back-button"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c04420] hover:text-[#d9582a] transition-colors duration-150 mb-8 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Voltar para o Início
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2825] leading-tight mb-4">
              Termos de Uso e Política de Privacidade
            </h1>
            <p className="text-sm text-[#2c2825]/50">
              Última atualização: 12 de abril de 2026
            </p>
            <div
              className="mt-6 h-1 w-20 rounded-full"
              style={{ background: 'linear-gradient(90deg, #d9582a, #e67a4c)' }}
              aria-hidden="true"
            />
          </header>

          {/* Intro */}
          <div className="prose-legal space-y-6 text-[#2c2825]/80 leading-relaxed text-base">
            <p>
              Bem-vindo(a) ao site do <strong className="text-[#2c2825]">Prof. Javier Chopek</strong>.
              Ao acessar e utilizar esta página, você concorda com os Termos de Uso e a Política de
              Privacidade descritos abaixo. Caso não concorde com algum dos termos, pedimos que não
              utilize os serviços aqui oferecidos.
            </p>

            {/* ─── 1. Termos de Uso ─── */}
            <section aria-labelledby="termos-heading">
              <h2
                id="termos-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#2c2825] mt-12 mb-6"
              >
                1. Termos de Uso
              </h2>

              <h3 className="font-semibold text-[#2c2825] text-lg mb-2">
                1.1. Descrição dos Serviços
              </h3>
              <p>
                Este site tem como objetivo apresentar e facilitar o contato para os serviços de{' '}
                <strong className="text-[#c04420]">aulas particulares de espanhol latino para brasileiros</strong>,
                oferecidos por <strong className="text-[#2c2825]">Prof. Javier Chopek</strong>.
              </p>

              <h3 className="font-semibold text-[#2c2825] text-lg mt-8 mb-2">
                1.2. Contato e Agendamentos
              </h3>
              <p>
                Os contatos, orçamentos e agendamentos realizados através dos botões de redirecionamento
                deste site (como WhatsApp e E-mail) são de inteira responsabilidade do usuário e do
                profissional prestador do serviço. O site funciona apenas como um canal de vitrine e
                facilitação de comunicação.
              </p>

              <h3 className="font-semibold text-[#2c2825] text-lg mt-8 mb-2">
                1.3. Isenção de Responsabilidade Técnica
              </h3>
              <p>
                A infraestrutura web, design e código-fonte deste site foram desenvolvidos de forma
                terceirizada. O desenvolvedor responsável pela criação da página não possui vínculos
                societários, não atua no atendimento aos clientes e não se responsabiliza pela prestação
                dos serviços ofertados, promessas comerciais, ou pela gestão e armazenamento dos dados
                trocados diretamente com o profissional após o redirecionamento.
              </p>
            </section>

            {/* ─── 2. Política de Privacidade ─── */}
            <section aria-labelledby="privacidade-heading">
              <h2
                id="privacidade-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#2c2825] mt-14 mb-2"
              >
                2. Política de Privacidade (LGPD)
              </h2>
              <p className="text-sm text-[#2c2825]/50 mb-6">
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
              </p>

              <h3 className="font-semibold text-[#2c2825] text-lg mb-2">
                2.1. Coleta de Dados
              </h3>
              <p>
                Nós coletamos apenas as informações estritamente necessárias para a prestação do serviço
                ou atendimento. Quando você clica em nossos botões de contato (WhatsApp ou E-mail), os
                dados fornecidos voluntariamente por você (como seu nome, número de telefone e conteúdo
                da mensagem) são recebidos diretamente por{' '}
                <strong className="text-[#2c2825]">Prof. Javier Chopek</strong>. Este site não possui
                bancos de dados ocultos que capturam suas informações sem o seu consentimento.
              </p>

              <h3 className="font-semibold text-[#2c2825] text-lg mt-8 mb-2">
                2.2. Uso dos Dados
              </h3>
              <p className="mb-3">
                Os dados fornecidos por você serão utilizados única e exclusivamente para:
              </p>
              <ul className="space-y-2 ml-1">
                {[
                  'Retornar o seu contato e responder a dúvidas;',
                  'Enviar orçamentos e realizar agendamentos;',
                  'Prestar o serviço contratado;',
                  'Enviar atualizações estritamente relacionadas ao serviço solicitado.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d9582a] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-[#2c2825] text-lg mt-8 mb-2">
                2.3. Compartilhamento de Informações
              </h3>
              <p>
                Nós não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins
                de marketing ou qualquer outra finalidade que não seja o cumprimento do serviço
                solicitado, exceto se exigido por lei ou determinação judicial.
              </p>

              <h3 className="font-semibold text-[#2c2825] text-lg mt-8 mb-2">
                2.4. Cookies e Tecnologias de Rastreamento
              </h3>
              <p>
                Este site pode utilizar cookies básicos e ferramentas de análise (como o Google Analytics)
                apenas para entender o volume de acessos e melhorar a sua experiência de navegação. Nenhuma
                informação pessoal identificável é extraída através desses cookies funcionais.
              </p>

              <h3 className="font-semibold text-[#2c2825] text-lg mt-8 mb-2">
                2.5. Seus Direitos
              </h3>
              <p className="mb-3">Você tem o direito de solicitar a qualquer momento:</p>
              <ul className="space-y-2 ml-1">
                {[
                  'A confirmação da existência de tratamento dos seus dados;',
                  'A correção de dados incompletos, inexatos ou desatualizados;',
                  'A exclusão dos seus dados dos nossos contatos comerciais.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3a9bf5] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-[#2c2825] text-lg mt-8 mb-2">
                2.6. Contato do Controlador de Dados
              </h3>
              <p className="mb-4">
                Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato
                diretamente com o responsável pelo tratamento dos dados:
              </p>

              {/* Contact card */}
              <div className="rounded-2xl border border-[#eedfc0] bg-[#fdfaf5] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-[#2c2825]/50 w-24 shrink-0">
                    Responsável
                  </span>
                  <span className="font-semibold text-[#2c2825]">Prof. Javier Chopek</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-[#2c2825]/50 w-24 shrink-0">
                    E-mail
                  </span>
                  <a
                    href="mailto:javichopek@hotmail.com"
                    className="text-[#c04420] hover:text-[#d9582a] transition-colors underline underline-offset-2"
                  >
                    javichopek@hotmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-[#2c2825]/50 w-24 shrink-0">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/5511952098958"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c04420] hover:text-[#d9582a] transition-colors underline underline-offset-2"
                  >
                    +55 11 95209-8958
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom back button */}
          <div className="mt-16 pt-8 border-t border-[#eedfc0]">
            <Link
              to="/"
              id="legal-back-button-bottom"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#c04420] border-2 border-[#d9582a]/30 hover:border-[#d9582a] hover:bg-[#fdf4f0] transition-all duration-200 text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Voltar para o Início
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
