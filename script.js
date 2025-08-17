// Daoshi Store - JavaScript Functionality
// Temática Star Butterfly com Sistema de Preços em Tempo Real

// Global variables
let currentUSDTPrice = 0;
let currentUSDPrice = 0;

// Game information and pricing
const gameInfo = {
    mir4: {
        title: 'MIR4',
        products: 'Vendemos: Gold e Topups',
        features: [
            'Sistema de clãs e territórios',
            'Economia baseada em blockchain',
            'PvP em larga escala',
            'Mining de Darksteel'
        ],
        platforms: ['PC', 'Mobile'],
        discord: 'https://discord.gg/Zve6f8VQ',
        pricing: {
            fixed: [
                { name: 'Gold 1k - 9k', priceUSD: 4.85, priceBRL: 29.00 },
                { name: 'Gold 10k+', priceUSD: 4.85, priceBRL: 27.00 },
                { name: 'Gold 20k+', priceUSD: 4.85, priceBRL: 26.55 },
                { name: 'Gold 30k+', priceUSD: 4.85, priceBRL: 26.55 }
            ],
            packs: [
                { name: 'Pack $1', originalPrice: 1, discountPrice: 0.90 },
                { name: 'Pack $3', originalPrice: 3, discountPrice: 2.55 },
                { name: 'Pack $5', originalPrice: 5, discountPrice: 4.15 },
                { name: 'Pack $10', originalPrice: 10, discountPrice: 7.50 },
                { name: 'Pack $30', originalPrice: 30, discountPrice: 22.50 },
                { name: 'Pack $50', originalPrice: 50, discountPrice: 38.50 },
                { name: 'Pack $100', originalPrice: 100, discountPrice: 74.00 }
            ],
            webshop: [
                { name: 'Pack $30', originalPrice: 30, discountPrice: 32.50 },
                { name: 'Pack $50', originalPrice: 50, discountPrice: 53.50 },
                { name: 'Pack $100', originalPrice: 100, discountPrice: 107.00 }
            ]
        }
    },
    nightcrows: {
        title: 'Night Crows',
        products: 'Vendemos: Diamantes e Topups',
        features: [
            'Mundo aberto com voo livre',
            'Sistema de profissões avançado',
            'Combate aéreo inovador',
            'Guildas e conquistas'
        ],
        platforms: ['PC', 'Mobile'],
        discord: 'https://discord.gg/Zve6f8VQ',
        pricing: {
            fixed: [
                { name: 'Diamantes (1k)', priceUSD: 4.00, priceBRL: 24.00 }
            ],
            packs: [
                { name: 'Pack $5', originalPrice: 5, discountPrice: 4.00 },
                { name: 'Pack $8', originalPrice: 8, discountPrice: 6.40 },
                { name: 'Pack $10', originalPrice: 10, discountPrice: 8.00 },
                { name: 'Pack $20', originalPrice: 20, discountPrice: 16.00 },
                { name: 'Pack $30', originalPrice: 30, discountPrice: 24.00 },
                { name: 'Pack $50', originalPrice: 50, discountPrice: 40.00 },
                { name: 'Pack $100', originalPrice: 100, discountPrice: 80.00 }
            ],
            twd: [
                { name: 'Pack 500 TWD', originalPrice: 500, discountPrice: 13.70, currency: 'TWD' },
                { name: 'Pack 800 TWD', originalPrice: 800, discountPrice: 21.92, currency: 'TWD' },
                { name: 'Pack 1.000 TWD', originalPrice: 1000, discountPrice: 27.40, currency: 'TWD' },
                { name: 'Pack 1.200 TWD', originalPrice: 1200, discountPrice: 32.88, currency: 'TWD' },
                { name: 'Pack 3.000 TWD', originalPrice: 3000, discountPrice: 82.20, currency: 'TWD' },
                { name: 'Pack 3.500 TWD', originalPrice: 3500, discountPrice: 95.90, currency: 'TWD' },
                { name: 'Pack 5.000 TWD', originalPrice: 5000, discountPrice: 137.00, currency: 'TWD' },
                { name: 'Pack 7.000 TWD', originalPrice: 7000, discountPrice: 191.80, currency: 'TWD' },
                { name: 'Pack 10.000 TWD', originalPrice: 10000, discountPrice: 274.00, currency: 'TWD' },
                { name: 'Pack 30.000 TWD', originalPrice: 30000, discountPrice: 822.00, currency: 'TWD' }
            ]
        }
    },
    rom: {
        title: 'ROM: Remember of Majesty',
        products: 'Vendemos: Topups',
        features: [
            'MMORPG com estilo anime',
            'Sistema de classes diversificado',
            'Raids e dungeons desafiadoras',
            'PvP competitivo'
        ],
        platforms: ['PC', 'Mobile'],
        discord: 'https://discord.gg/Zve6f8VQ',
        pricing: {
            packsUSDT: [
                { name: 'Pack $7.70', originalPrice: 7.70, discountPrice: 6.93 },
                { name: 'Pack $8', originalPrice: 8, discountPrice: 7.20 },
                { name: 'Pack $23', originalPrice: 23, discountPrice: 20.70 },
                { name: 'Pack $30', originalPrice: 30, discountPrice: 27.00 },
                { name: 'Pack $33', originalPrice: 33, discountPrice: 29.70 },
                { name: 'Pack $37', originalPrice: 37, discountPrice: 33.30 },
                { name: 'Pack $50', originalPrice: 50, discountPrice: 45.00 },
                { name: 'Pack $74', originalPrice: 74, discountPrice: 66.60 }
            ]
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    fetchExchangeRates();
    // Update prices every 30 seconds
    setInterval(fetchExchangeRates, 30000);
});

function initializeWebsite() {
    // Initialize all features
    initializeScrollEffects();
    initializeMagicEffects();
    initializeGameCards();
    initializeNavigationEffects();
    console.log('🌟 Daoshi Store carregado com sucesso! BORA CASHAR??? 💰');
}

async function fetchExchangeRates() {
    const usdtPriceElement = document.getElementById('usdt-price');
    const usdtStatusElement = document.getElementById('usdt-status');
    const usdtIconElement = document.getElementById('usdt-icon');

    if (!usdtPriceElement || !usdtStatusElement || !usdtIconElement) {
        console.error('USDT widget elements not found.');
        return;
    }

    usdtStatusElement.textContent = '🔄'; // Loading state
    usdtStatusElement.style.color = '#FFD700'; // Gold for loading
    usdtIconElement.style.animation = 'spin 1s linear infinite'; // Spin icon

    try {
        // Fetch both USDT/BRL and USD/BRL rates
        const [usdtResponse] = await Promise.all([
            fetch('https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL')
        ]);

        if (!usdtResponse.ok) {
            throw new Error(`HTTP error! USDT status: ${usdtResponse.status}`);
        }

        const usdtData = await usdtResponse.json();
        const usdPrice = parseFloat(usdtData.price).toFixed(4); // Using USDT as USD proxy

        usdtPriceElement.textContent = `R$ ${usdPrice}`;
        usdtStatusElement.textContent = '✅'; // Success
        usdtStatusElement.style.color = '#06ffa5'; // Green for success
        usdtIconElement.style.animation = 'none'; // Stop spin
        usdtIconElement.style.transform = 'rotateY(0deg)'; // Reset rotation
        
        // Store the current prices globally
        currentUSDTPrice = parseFloat(usdtData.price);
        currentUSDPrice = parseFloat(usdtData.price); // Using USDT as USD proxy
        
        // Update game prices if modals are open
        updateGamePrices();
        
    } catch (error) {
        console.error('Erro ao buscar preços:', error);
        usdtPriceElement.textContent = 'Erro';
        usdtStatusElement.textContent = '❌'; // Error
        usdtStatusElement.style.color = '#FF1493'; // Red for error
        usdtIconElement.style.animation = 'none'; // Stop spin
        usdtIconElement.style.transform = 'rotateY(0deg)'; // Reset rotation
    }
}

function calculatePrice(price, currency = 'USD') {
    if (currency === 'BRL') {
        return `R$ ${price.toFixed(2)}`;
    }
    if (currency === 'TWD') {
        return `R$ ${(price * currentUSDPrice).toFixed(2)}`;
    }
    // USD conversion
    return `R$ ${(price * currentUSDPrice).toFixed(2)}`;
}

function generatePricingHTML(game) {
    if (!game.pricing) return '';
    
    let pricingHTML = `
        <div style="
            background: rgba(255, 255, 255, 0.7);
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 20px;
            border: 2px solid rgba(255, 215, 0, 0.4);
        ">
            <h3 style="
                font-family: 'Nunito', sans-serif;
                color: #2c3e50;
                margin-bottom: 15px;
                font-size: 1.3rem;
            ">💰 Preços <span id="price-status" style="font-size: 0.8rem; color: #666;">🔄</span></h3>
            <div class="pricing-container">
    `;
    
    // Fixed prices (Gold, Diamantes)
    if (game.pricing.fixed && game.pricing.fixed.length > 0) {
        pricingHTML += '<div class="pricing-section"><h4 style="color: #FF1493; margin-bottom: 10px;">🏆 Preços Fixos</h4>';
        game.pricing.fixed.forEach(item => {
            const usdPrice = `$${item.priceUSD.toFixed(2)}`;
            const brlPrice = `R$${item.priceBRL.toFixed(2)}`;
            pricingHTML += `
                <div class="price-item" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    margin-bottom: 5px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 8px;
                    border-left: 3px solid #FFD700;
                ">
                    <span style="font-weight: 600;">${item.name}</span>
                    <div style="text-align: right;">
                        <span style="color: #28a745; font-weight: 600; font-size: 0.9rem;">${usdPrice}</span>
                        <span style="color: #FF1493; font-weight: 700; margin-left: 8px;">${brlPrice}</span>
                    </div>
                </div>
            `;
        });
        pricingHTML += '</div>';
    }
    
    // Regular packs
    if (game.pricing.packs && game.pricing.packs.length > 0) {
        pricingHTML += '<div class="pricing-section"><h4 style="color: #FF1493; margin-bottom: 10px;">📦 Packs com Desconto</h4>';
        game.pricing.packs.forEach(item => {
            const originalPrice = calculatePrice(item.originalPrice);
            const discountPriceBRL = calculatePrice(item.discountPrice);
            const discountPriceUSD = `$${item.discountPrice.toFixed(2)}`;

            pricingHTML += `
                <div class="price-item" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    margin-bottom: 5px;
                    background: rgba(255, 20, 147, 0.1);
                    border-radius: 8px;
                    border-left: 3px solid #FF1493;
                ">
                    <span style="font-weight: 600;">${item.name}</span>
                    <div style="text-align: right;">
                        <div style="color: #999; text-decoration: line-through; font-size: 0.8rem;">${originalPrice}</div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="color: #28a745; font-weight: 600; font-size: 0.9rem;">${discountPriceUSD}</span>
                            <span style="color: #FF1493; font-weight: 700;">${discountPriceBRL}</span>

                        </div>
                    </div>
                </div>
            `;
        });
        pricingHTML += '</div>';
    }
    
    // TWD packs for Night Crows
    if (game.pricing.twd && game.pricing.twd.length > 0) {
        pricingHTML += '<div class="pricing-section"><h4 style="color: #FF1493; margin-bottom: 10px;">🇹🇼 Night Crows TWD</h4>';
        game.pricing.twd.forEach(item => {
            const discountPriceBRL = calculatePrice(item.discountPrice);
            const discountPriceUSD = `$${item.discountPrice.toFixed(2)}`;
            pricingHTML += `
                <div class="price-item" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    margin-bottom: 5px;
                    background: rgba(255, 105, 180, 0.1);
                    border-radius: 8px;
                    border-left: 3px solid #FF69B4;
                ">
                    <span style="font-weight: 600;">${item.name}</span>
                    <div style="text-align: right;">
                        <span style="color: #28a745; font-weight: 600; font-size: 0.9rem;">${discountPriceUSD}</span>
                        <span style="color: #FF1493; font-weight: 700; margin-left: 8px;">${discountPriceBRL}</span>
                    </div>
                </div>
            `;
        });
        pricingHTML += '</div>';
    }
    
    // WebShop for MIR4
    if (game.pricing.webshop && game.pricing.webshop.length > 0) {
        pricingHTML += '<div class="pricing-section"><h4 style="color: #FF1493; margin-bottom: 10px;">🌐 MIR4 WebShop</h4>';
        game.pricing.webshop.forEach(item => {
            const originalPrice = calculatePrice(item.originalPrice);
            const discountPriceBRL = calculatePrice(item.discountPrice);
            const discountPriceUSD = `$${item.discountPrice.toFixed(2)}`;
            pricingHTML += `
                <div class="price-item" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    margin-bottom: 5px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 8px;
                    border-left: 3px solid #FFD700;
                ">
                    <span style="font-weight: 600;">${item.name}</span>
                    <div style="text-align: right;">
                        <div style="color: #999; text-decoration: line-through; font-size: 0.8rem;">${originalPrice}</div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="color: #28a745; font-weight: 600; font-size: 0.9rem;">${discountPriceUSD}</span>
                            <span style="color: #FF1493; font-weight: 700;">${discountPriceBRL}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        pricingHTML += '</div>';
    }
    
    // USDT packs for ROM
    if (game.pricing.packsUSDT && game.pricing.packsUSDT.length > 0) {
        pricingHTML += '<div class="pricing-section"><h4 style="color: #FF1493; margin-bottom: 10px;">💰 Packs ROM (USDT)</h4>';
        game.pricing.packsUSDT.forEach(item => {
            const originalPriceBRL = calculatePrice(item.originalPrice);
            const discountPriceBRL = calculatePrice(item.discountPrice);
            const discountPriceUSDT = `${item.discountPrice.toFixed(2)} USDT`;

            pricingHTML += `
                <div class="price-item" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 12px;
                    margin-bottom: 5px;
                    background: rgba(255, 105, 180, 0.1);
                    border-radius: 8px;
                    border-left: 3px solid #FF69B4;
                ">
                    <span style="font-weight: 600;">${item.name}</span>
                    <div style="text-align: right;">
                        <div style="color: #999; text-decoration: line-through; font-size: 0.8rem;">${originalPriceBRL}</div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="color: #28a745; font-weight: 600; font-size: 0.9rem;">${discountPriceUSDT}</span>
                            <span style="color: #FF1493; font-weight: 700;">${discountPriceBRL}</span>

                        </div>
                    </div>
                </div>
            `;
        });
        pricingHTML += '</div>';
    }
    
    pricingHTML += `
            </div>
            <p style="
                font-size: 0.8rem;
                color: #666;
                margin-top: 10px;
                text-align: center;
                font-style: italic;
            ">* Preços atualizados em tempo real com base no dólar</p>
        </div>
    `;
    
    return pricingHTML;
}

function updateGamePrices() {
    const priceStatus = document.getElementById('price-status');
    if (priceStatus) {
        if (currentUSDPrice > 0) {
            priceStatus.textContent = '✅';
            priceStatus.style.color = '#06ffa5';
        } else {
            priceStatus.textContent = '❌';
            priceStatus.style.color = '#FF1493';
        }
    }
    
    // Update all price displays
    const priceItems = document.querySelectorAll('.price-item');
    // Prices are already calculated when modal opens, so just update status
}

function openGameModal(gameKey) {
    const game = gameInfo[gameKey];
    if (!game) return;

    // Create modal HTML
    const modalHTML = `
        <div id="gameModal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
        ">
            <div style="
                background: linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.95) 0%, 
                    rgba(255, 215, 0, 0.1) 50%,
                    rgba(255, 20, 147, 0.1) 100%
                );
                border-radius: 20px;
                padding: 30px;
                max-width: 700px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 
                    0 20px 60px rgba(255, 215, 0, 0.3),
                    0 30px 80px rgba(255, 20, 147, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3);
                border: 2px solid rgba(255, 215, 0, 0.4);
                position: relative;
                display: flex;
                flex-direction: column;
            ">
                <button onclick="closeGameModal()" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: linear-gradient(45deg, #FF1493, #FFD700);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    font-size: 1.5rem;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(255, 20, 147, 0.3);
                    transition: all 0.3s ease;
                " onmouseover="this.style.transform='scale(1.1) rotate(90deg)'" onmouseout="this.style.transform='scale(1) rotate(0deg)'">
                    ✕
                </button>
                
                <h2 style="
                    font-family: 'Fredoka One', cursive;
                    font-size: 2.5rem;
                    background: linear-gradient(45deg, #FFD700, #FF1493, #FFFF00);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-align: center;
                    margin-bottom: 20px;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                ">${game.title}</h2>
                
                <div style="
                    background: rgba(255, 255, 255, 0.7);
                    padding: 20px;
                    border-radius: 15px;
                    margin-bottom: 20px;
                    border: 2px solid rgba(255, 215, 0, 0.3);
                ">
                    <h3 style="
                        font-family: 'Nunito', sans-serif;
                        color: #2c3e50;
                        margin-bottom: 15px;
                        font-size: 1.3rem;
                    ">🛒 Produtos Disponíveis</h3>
                    <p style="
                        font-family: 'Nunito', sans-serif;
                        color: #555;
                        font-size: 1.1rem;
                        margin: 0;
                    ">${game.products}</p>
                </div>
                
                ${generatePricingHTML(game)}
                
                <div style="
                    background: rgba(255, 255, 255, 0.7);
                    padding: 20px;
                    border-radius: 15px;
                    margin-bottom: 20px;
                    border: 2px solid rgba(255, 20, 147, 0.3);
                ">
                    <h3 style="
                        font-family: 'Nunito', sans-serif;
                        color: #2c3e50;
                        margin-bottom: 15px;
                        font-size: 1.3rem;
                    ">🎮 Características</h3>
                    <ul style="
                        font-family: 'Nunito', sans-serif;
                        color: #555;
                        margin: 0;
                        padding-left: 20px;
                    ">
                        ${game.features.map(feature => `<li style="margin-bottom: 8px; font-size: 1rem;">${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="
                    background: rgba(255, 255, 255, 0.7);
                    padding: 20px;
                    border-radius: 15px;
                    margin-bottom: 20px;
                    border: 2px solid rgba(255, 105, 180, 0.3);
                ">
                    <h3 style="
                        font-family: 'Nunito', sans-serif;
                        color: #2c3e50;
                        margin-bottom: 15px;
                        font-size: 1.3rem;
                    ">📱 Plataformas</h3>
                    <p style="
                        font-family: 'Nunito', sans-serif;
                        color: #555;
                        font-size: 1.1rem;
                        margin: 0;
                    ">${game.platforms.join(', ')}</p>
                </div>
                
                <a href="${game.discord}" target="_blank" style="
                    display: inline-block;
                    background: linear-gradient(45deg, #5865F2, #7289DA);
                    color: white;
                    text-decoration: none;
                    padding: 15px 30px;
                    border-radius: 25px;
                    font-family: 'Nunito', sans-serif;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-align: center;
                    box-shadow: 0 8px 25px rgba(88, 101, 242, 0.3);
                    transition: all 0.3s ease;
                    margin-top: auto;
                " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 35px rgba(88, 101, 242, 0.4)'" onmouseout="this.style.transform='translateY(0px)'; this.style.boxShadow='0 8px 25px rgba(88, 101, 242, 0.3)'">
                    💬 Comprar no Discord
                </a>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Update prices immediately
    updateGamePrices();
}

function closeGameModal() {
    const modal = document.getElementById('gameModal');
    if (modal) {
        modal.remove();
    }
}

// Scroll effects for elements
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe game cards for scroll animations
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// Add magical effects and interactions
function initializeMagicEffects() {
    // Add hover effects to buttons
    addButtonMagicEffects();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
}

// Add magical hover effects to buttons
function addButtonMagicEffects() {
    const buttons = document.querySelectorAll('.btn, .card-btn, .nav-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) drop-shadow(0 0 10px currentColor)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
        
        button.addEventListener('click', function(e) {
            createClickEffect(e);
        });
    });
}

// Create magical click effect
function createClickEffect(e) {
    const clickEffect = document.createElement('div');
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    clickEffect.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255, 105, 180, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: clickRipple 0.6s ease-out forwards;
    `;
    
    e.target.style.position = 'relative';
    e.target.appendChild(clickEffect);
    
    setTimeout(() => {
        if (clickEffect.parentNode) {
            clickEffect.parentNode.removeChild(clickEffect);
        }
    }, 600);
}

// Add click ripple animation
if (!document.getElementById('clickStyles')) {
    const clickStyles = document.createElement('style');
    clickStyles.id = 'clickStyles';
    clickStyles.textContent = `
        @keyframes clickRipple {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(clickStyles);
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced game card interactions
function initializeGameCards() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        // Add tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Add magical sparkle effect on hover
        card.addEventListener('mouseenter', function() {
            createSparkleEffect(this);
        });
    });
}

// Create sparkle effect for cards
function createSparkleEffect(element) {
    const sparkles = ['✨', '💫', '⭐'];
    const sparkleCount = 5;
    
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 15 + 10}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 10;
                animation: sparkleFloat 2s ease-out forwards;
            `;
            
            element.style.position = 'relative';
            element.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 2000);
        }, i * 200);
    }
}

// Add sparkle animation
if (!document.getElementById('sparkleStyles')) {
    const sparkleStyles = document.createElement('style');
    sparkleStyles.id = 'sparkleStyles';
    sparkleStyles.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-30px) scale(0);
            }
        }
    `;
    document.head.appendChild(sparkleStyles);
}

// Navigation effects
function initializeNavigationEffects() {
    // Hide/show header on scroll
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // Add scroll indicator
    createScrollIndicator();
}

// Create scroll progress indicator
function createScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #FFD700, #FF1493, #FFFF00);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });
}

// Console welcome message
console.log(`
💰 DAOSHI STORE 💰
    BORA CASHAR???
    
🌟 Site carregado com sucesso!
💵 Sistema de preços em tempo real ativo!
🔗 Visite nosso Discord: https://discord.gg/Zve6f8VQ
🛒 Canal da loja: https://discord.com/channels/1184339622696853626/1388247966242050048

💖 Feito com carinho! 💖
`);

// Help Modal Functions
function toggleHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

function showPriceInfo() {
    alert('📊 NOSSOS PREÇOS:\n\n💰 Preços fixos: Gold e Diamantes em valores fixos\n📦 Packs: Valores em USD convertidos automaticamente\n🔄 Atualização: A cada 30 segundos via API Binance\n💱 Desconto: Sempre com desconto já aplicado!\n\n🤝 Todos os negócios são feitos via Discord!');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('helpModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Export functions for global access
window.openGameModal = openGameModal;
window.closeGameModal = closeGameModal;
window.toggleHelpModal = toggleHelpModal;
window.showPriceInfo = showPriceInfo;