
function anything() {
	var parent = this;
	while (parent) {
		if (parent.patcher.getnamed(messagename)) {
			outlet(0, 1);
			return;
		}
		parent = parent.patcher.box;
	}
	outlet(0, 0);
}
