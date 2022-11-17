 const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: [
        
                    'red',
    
                ],
              
            },

            {
                    label: '# of Votes',
                    data: [5, 4, 3, 3, 6, 7, 8],
                    borderColor: [
                        'blue',
                        
                    ],
                   
                }
        
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const toggleThemeButton = document.querySelector('input[type="checkbox"]')
    const sliderButton = document.querySelector('.fa-bars')
    const sliderEle = document.querySelector('aside')
    sliderButton.addEventListener('click', () => {
        
       sliderEle.classList.toggle('slideIn')
    })
    toggleThemeButton.addEventListener('click', () => {
        document.querySelector('body').classList.toggle('dark-theme-variables')
    })