let costVisible = true;

function toggleCost() {
  const slidingCostContainer = document.querySelector('.sliding-cost-container');
  if (costVisible) {
    slidingCostContainer.style.transform = 'translateY(100%)';
    costVisible = false;
  } else {
    slidingCostContainer.style.transform = 'translateY(0)';
    costVisible = true;
  }
}