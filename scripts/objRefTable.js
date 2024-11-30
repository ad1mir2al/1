const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.RotateTowardPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{ТайловыйФон: 0},
	{"8Направлений": 0},
	{Спрайт: 0},
	{спра: 0},
	{Пуля: 0},
	{Спрайт2: 0},
	{Клавиатура: 0}
];

self.InstanceType = {
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	спра: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {}
}