<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative overflow-hidden min-h-screen flex items-center" style="background: linear-gradient(45deg, #091e27, #48f0e7);">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-left">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Pagamentos
            <span class="block bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
              Globais
            </span>
            <span class="block text-4xl md:text-5xl">sem fronteiras</span>
          </h1>
          <p class="text-xl text-white/90 mb-8 max-w-lg">
            Conecte seu negócio ao mundo com nossa plataforma de pagamentos PIX integrada a múltiplos adquirentes.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/register" class="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Começar Gratuitamente
            </router-link>
            <router-link to="/login" class="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              Fazer Login
            </router-link>
          </div>
        </div>
        <div class="relative">
          <div class="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <div class="text-6xl text-white">🌍</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Reach Section -->
    <section class="py-24 bg-white dark:bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pagamentos globais sem fronteiras
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Conecte seu negócio ao mundo com nossa infraestrutura global de pagamentos
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-primary-500 mb-2">150+</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Países Atendidos</div>
            <p class="text-gray-600 dark:text-gray-400">Presença global em todos os continentes</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-secondary-500 mb-2">50+</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Moedas Suportadas</div>
            <p class="text-gray-600 dark:text-gray-400">Aceite pagamentos em múltiplas moedas</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-accent-500 mb-2">99.9%</div>
            <div class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Uptime Global</div>
            <p class="text-gray-600 dark:text-gray-400">Infraestrutura confiável 24/7</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Methods Section -->
    <section class="py-24 bg-gray-50 dark:bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Aceite todos os métodos de pagamento
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Ofereça a melhor experiência de pagamento para seus clientes
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          <div class="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-primary-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span class="text-white text-xs font-bold">PIX</span>
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">PIX</div>
          </div>
          <div class="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span class="text-white text-xs font-bold">VISA</span>
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">Visa</div>
          </div>
          <div class="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span class="text-white text-xs font-bold">MC</span>
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">Mastercard</div>
          </div>
          <div class="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span class="text-white text-xs font-bold">ELO</span>
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">Elo</div>
          </div>
          <div class="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span class="text-white text-xs font-bold">$$</span>
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">Boleto</div>
          </div>
          <div class="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg text-center">
            <div class="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span class="text-white text-xs font-bold">+</span>
            </div>
            <div class="text-sm font-semibold text-gray-900 dark:text-white">Outros</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Preview -->
    <section class="py-24 bg-white dark:bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Dashboard completo para seu negócio
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Monitore todas as suas transações, vendas e métricas em tempo real
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300">Relatórios em tempo real</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300">Analytics avançado</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300">Gestão de clientes</span>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-gray-100 dark:bg-dark-800 rounded-2xl p-8 shadow-2xl">
              <div class="h-64 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span class="text-white text-2xl font-bold">📊 Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24" style="background: linear-gradient(45deg, #091e27, #48f0e7);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Números que falam por si
          </h2>
          <p class="text-xl text-white/90">
            Resultados comprovados de quem confia na Plenna
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">R$ 2.5B+</div>
            <div class="text-white/80">Processados</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">10K+</div>
            <div class="text-white/80">Empresas</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
            <div class="text-white/80">Uptime</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">24/7</div>
            <div class="text-white/80">Suporte</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section class="py-24 bg-gray-50 dark:bg-dark-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Como funciona
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Simples, rápido e eficiente
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              1
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cadastre-se</h3>
            <p class="text-gray-600 dark:text-gray-400">Crie sua conta em minutos e configure seus adquirentes</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Integre</h3>
            <p class="text-gray-600 dark:text-gray-400">Use nossa API ou crie checkouts personalizados</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-6 bg-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              3
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Receba</h3>
            <p class="text-gray-600 dark:text-gray-400">Monitore vendas e receba pagamentos automaticamente</p>
          </div>
        </div>
      </div>
    </section>

    <!-- More than Payment Methods -->
    <section class="py-24 bg-white dark:bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mais do que formas de pagamento
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Uma plataforma completa para impulsionar suas vendas
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-white text-xl">📊</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analytics Avançado</h3>
                <p class="text-gray-600 dark:text-gray-400">Relatórios detalhados e insights para otimizar suas vendas</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-white text-xl">🎯</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Marketing Integrado</h3>
                <p class="text-gray-600 dark:text-gray-400">Ferramentas de conversão e remarketing automático</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-white text-xl">🔄</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Automação Completa</h3>
                <p class="text-gray-600 dark:text-gray-400">Workflows automatizados para maximizar resultados</p>
              </div>
            </div>
          </div>
          
          <div>
            <div class="bg-gray-100 dark:bg-dark-800 rounded-2xl p-8 shadow-2xl">
              <div class="h-64 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                <span class="text-white text-2xl font-bold">📈 Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Complete Checkout -->
    <section class="py-24" style="background: linear-gradient(45deg, #091e27, #48f0e7);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div class="h-64 bg-white/20 rounded-xl flex items-center justify-center">
                <img src="../assets/images/6.png" alt="">
                <!-- <span class="text-white text-2xl font-bold">🛒 Checkout</span> -->
              </div>
            </div>
          </div>
          
          <div class="text-white">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              Tenha um checkout completo
            </h2>
            <p class="text-xl text-white/90 mb-8">
              Páginas de vendas otimizadas para máxima conversão
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-white/90">Order bumps para aumentar ticket médio</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-white/90">Depoimentos e provas sociais integradas</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-white/90">Design responsivo e otimizado</span>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-white/90">Múltiplas formas de pagamento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24" style="background: linear-gradient(45deg, #091e27, #48f0e7);">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Voce cresce, a gente celebra. Juntos, chegamos mais longe!
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          </p>
        </div>
              <img src="" alt="">
              <h1>Voce cresce, a gente celebra. Juntos, chegamos mais longe!</h1>
            </div>

    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Comece hoje mesmo
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Junte-se a milhares de empresas que já transformaram seus pagamentos com a Plenna
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/register" class="bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg px-12 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Criar Conta Gratuita
          </router-link>
          <a href="#" class="bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-700 font-semibold text-lg px-12 py-4 rounded-xl transition-all duration-300">
            Ver Demonstração
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>