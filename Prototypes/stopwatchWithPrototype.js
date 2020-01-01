// Creates a Stopwatch with the ability to start, stop, and reset it

// Move Start and Stop to become a prototype of the Stopwatch Object
function Stopwatch() {
	let startTime,
		endTime,
		running = false,
		duration = 0;

	Object.defineProperty(this, 'duration', {
		get: function() {
			return duration;
		},
		set: function(value) {
			duration = value;
		},
	});
	Object.defineProperty(this, 'startTime', {
		get: function() {
			return startTime;
		},
	});
	Object.defineProperty(this, 'endTime', {
		get: function() {
			return endTime;
		},
	});
	Object.defineProperty(this, 'running', {
		get: function() {
			return running;
		},
	});
}

Stopwatch.prototype.start = function() {
	if (this.running) throw new Error('Sorry, the stopwatch is already running');

	this.running = true;

	this.startTime = new Date();
};

Stopwatch.prototype.pause = function() {
	if (!this.running) throw new Error('Sorry, the stopwatch is already stopped');

	this.running = false;

	this.endTime = new Date();
	const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
	this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
	this.startTime = null;
	this.endTime = null;
	this.running = false;
	this.duration = 0;
};
