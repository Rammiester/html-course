// function to update togglebox
function toggleCheckbox(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox.hasAttribute('checked')) {
        checkbox.removeAttribute('checked');
    } else {
        checkbox.setAttribute('checked', 'true');
    }
    updateProgress();
    }


      // Function to update progress
      function updateProgress() {
          var checkboxes = document.querySelectorAll('input[type="checkbox"]');
          var totalSections = checkboxes.length;
          var completedSections = 0;

          checkboxes.forEach(function (checkbox) {
              if (checkbox.checked) {
                  completedSections++;
              }
          });

          var progress = document.getElementById('progress');
          var progressBar = document.querySelector('.progress-bar');

          progress.textContent = ((completedSections / totalSections) * 100).toFixed(0) + '%';
          progressBar.style.width = (completedSections / totalSections) * 100 + '%';
          progressBar.setAttribute('aria-valuenow', (completedSections / totalSections) * 100);
      }