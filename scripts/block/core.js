///
const core = extendContent(CoreBlock, "core", {
    canBreak(tile) { return Vars.state.teams.cores(tile.team()).size > 1; },
    canReplace(other) { return other.alwaysReplace; },
    canPlaceOn(tile, team) { return true; },
    placeBegan(tile, previous) {},
    beforePlaceBegan(tile, previous) {},

    drawPlace(x, y, rotation, valid) {},
});
core.size= 3;
core.hasItems= true;
core.unloadable= true;
core.breakable= true;
core.rebuildable= false;
core.health= 3000;
core.itemCapacity= 1000;
core.buildCostMultiplier= 0.6;
core.unitCapModifier = 5;
core.requirements = ItemStack.with(
    Items.copper, 1000,
    Items.lead, 1000,
    Items.silicon, 400,
    Items.graphite, 450,
    Items.titanium, 400
);
core.buildVisibility = BuildVisibility.shown;
core.category = Category.effect;
exports.core = core;