(function () {
  var showcasesElement = $('#showcases');
  var createCard = function (obj) {
    var cardStr =
      `<div class="card border-success mb-3" style="width: 20rem;">
        <div class="card-header bg-transparent border-success">${obj.name}</div>
        <div class="card-body">
          <div class="left">
            <p class="card-text">
              ${obj.owner}
            </p>
            <p class="stat">
              
            </p>
            <p class="card-text">
              ${obj.description}
            </p>  
          </div>
          <div class="right">
            <img src="${obj.repoDetail.owner.avatar_url}" />
          </div>
          
        </div>
        <div class="card-footer bg-transparent border-success">
          <button type="button" class="btn btn-secondary btn-sm">view</button>
        </div>
      </div>`;
    $(cardStr).appendTo(showcasesElement);
  }
  $.ajax({
    url: 'http://angulardoc.io/api/repos/showcases',
    type: 'get',
    dataType: 'jsonp',
    success: function (data) {
      _.forEach(data, (item) => {
        createCard(item);
      })
    }
  })
})()