const tableBox = document.querySelector('#tableBox');

window.addEventListener('keydown' , (e) =>{
        tableBox.innerHTML =` 
        <table >
        <tr>
          <th>KEY</th>
          <th>KEY-CODE</th>
          <th>CODE</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'soace' : e.key }</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>

      </table>
        `;

})