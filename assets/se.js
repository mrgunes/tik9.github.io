// console.log('start se');


    // arr = ['comments', 'posts', 'questions', 'answers']
    copo = ['Comments', 'Posts']
    max_posts = 5
    truncate_cut = 130
    ul = document.createElement('ul')

    copo.forEach(function (cp_elem) {

        // cp_elem=document.createElement('li')
        // ul_temp=document.createElement('ul')

        se = 'https://api.stackexchange.com/2.2'
        user = se + '/users/1705829'
        so = 'site=stackoverflow'
        so = so+'&filter=withbody'
        // so = 'order=desc&sort=activity&site=stackoverflow&filter=withbody'

        url = user + '/' + cp_elem + '?' + so

        responseData = fetch(url).then(response => response.json())

        responseData.then(({
            items,
        }) => {
            counter_posts = 0
            for ({
                creation_date,
                link,
                body,
            }
                of items) {

                if (counter_posts == max_posts) {
                    break
                }
                // console.log('title',title)

                dateString = datef(creation_date)

                list_item = document.createElement('li')

                ul.appendChild(list_item)

                if (counter_posts== max_posts/2){
                    list_item.textContent=cp_elem
                    list_item.style.listStyle = "none";
                    continue
                }

                if (counter_posts== 0){
                    counter_posts=1
                    list_item.textContent=cp_elem
                    continue
                }

                body = truncate(body)

                body = body.replace(/<\/?[^>]+(>|$)/g, '')
                body = body.replace(/&quot;/g, '')
                body = body.replace(/&#39;/g, '')
                body = body.replace(/&gt;/g, '')
// rege()
                a = document.createElement('a')
                list_item.appendChild(a)
                if (link == undefined) {
                    a.href = 'https://stackexchange.com/users/1886776/timo?tab=activity'

                } else {
                    a.href = link
                }

                a.textContent = `${dateString} | ${body}`
                // | ${score}
                counter_posts++

            }
        })

        document.getElementById('stackexch').appendChild(ul)
        // document.getElementById(cp_elem).appendChild(ul)

    })