export class Excel {
     constructor(selector, options) {
         this.$el = document.querySelector(selector)
         this.components = options.components || []
     }

     render() {
         // afterbegin, afterend, beforeend, beforebegin
         this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
         console.log('Test');
     }
}
