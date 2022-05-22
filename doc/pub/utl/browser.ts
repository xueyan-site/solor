/**
 * 复制文本至剪贴板
 */
export function copyToClipboard(text: string): boolean {
 if (document.execCommand) {
   const textDom = document.createElement('textarea')
   textDom.innerHTML = text
   textDom.style.opacity = '0'
   textDom.style.position = 'fixed'
   textDom.style.left = '-100%'
   textDom.style.top = '-100%'
   document.body.appendChild(textDom)
   textDom.select()
   document.execCommand('Copy')
   document.body.removeChild(textDom)
   return true
 } else {
   console.warn('浏览器不支持复制至粘贴板的功能')
   return false
 }
}