var obs1 = [{state:"A", action:"R"}, {state:"B", action:"B"}];
var obs2 = [{state:"A", action:"B"}, {state:"C", action:"R"}];
var obs3 = [{state:"A", action:"F"}, {state:"A", action:"F"}, {state:"A", action:"F"}, {state:"A", action:"F"}, {state:"A", action:"F"}];
var obs4 = [{state:"A", action:"L"}, {state:"Prize", action:"R"}];
var obs5 = [{state:"A", action:"L"}, {state:"Prize", action:"R"},{state:"A", action:"L"}, {state:"Prize", action:"R"}];
var obs6 = [{state:"Prize",action:"B"},{state:"Prize",action:"L"},{state:"Prize",action:"B"},{state:"Prize",action:"L"},{state:"Prize",action:"B"},{state:"Prize",action:"L"}];
var obs7 = [{state:"B",action:"B"},{state:"D",action:"L"}, {state: "C",action:"F"}, {state:"A",action:"R"}];
var obs8 = [{state:"C",action:"R"},{state:"D",action:"F"},{state:"B", action:"L"},{state:"A",action:"R"}];
module.exports.observations = [obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8];
module.exports.rewards = [0,0,0,1,2,6,0,0];

