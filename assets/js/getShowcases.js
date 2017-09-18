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
              <i aria-hidden="true" class="fa fa-bookmark"> ${obj.bookmarked_count}</i>
              <i aria-hidden="true" class="fa fa-eye"> ${obj.repoDetail.subscribers_count}</i>
              <i aria-hidden="true" class="fa fa-star"> ${obj.repoDetail.watchers_count}</i>
              <i aria-hidden="true" class="fa fa-code-fork"> ${obj.repoDetail.forks_count}</i>
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
          <a href="http://angulardoc.io/repos/${obj.repoType}/${obj.repoId}/project/${encodeURIComponent(obj.projects[0].path)}/overview" 
            target="_blank">
            <button type="button" class="btn btn-secondary btn-sm">
              view
            </button>
          </a>
        </div>
      </div>`;
    var gridStr = `
      <div class="column is-3">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <img src="https://placehold.it/64x64" class="avatar">
            &commat;username
          </p>
          <span class="card-header-icon timestamp">
            2m
          </span>
        </header>
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://placehold.it/1280x960" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="panel-block-item">
            <span class="likes">
              <span class="icon">
                <i class="fa fa-heart"></i>
              </span>
              303k Likes
            </span>
            <span class="comments">
              <span class="icon">
                <i class="fa fa-comment"></i>
              </span>
              12k Comments
            </span>
          </div>
        </div>
      </div>
    </div>`
    $(gridStr).appendTo(showcasesElement);
  }
  $.ajax({
    url: 'http://angulardoc.io/api/repos/showcases',
    type: 'get',
    success: function (data) {
      _.forEach(data, (item) => {
        createCard(item);
      })
    }
  })
})()