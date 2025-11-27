

<section class="relative py-20 md:py-32 overflow-hidden ">
	<!-- Background gradient for visual depth -->
	<!-- <div
		class="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-transparent to-accent/5"
	></div> -->

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Left Content -->
			<div class="space-y-8">
				<h1 class="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
					Elevate Your Brand with Impactful
					<span class="text-primary">Marketing</span>
				</h1>
				<p class="text-lg text-foreground/90 leading-relaxed">
					From digital campaigns to print-ready designs and video content. Leora Digitals is your
					all-in-one partner for brand growth.
				</p>
				<a
				  href="/contact"
					class="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
				>
					Get Started
			</a>
			</div>

			<!-- Right - Logo Visual -->
			<div class="relative h-96 hidden lg:flex  items-center justify-center">
				<!-- Geometric logo pattern -->
				<div class="relative w-80 h-80 flex items-center justify-center">
					<!-- Outer ring -->
					<div
						class="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin"
						style="animation-duration: 20s"
					></div>

					<!-- Middle ring -->
					<div
						class="absolute inset-8 border-2 border-accent/30 rounded-full animate-spin"
						style="animation-direction: reverse; animation-duration: 15s"
					></div>

					<!-- Inner geometric logo -->
					<svg
						class="w-48 h-4  text-primary drop-shadow-2xl"
						viewBox="0 0 200 200"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<!-- Geometric pinwheel design -->
						<g transform="translate(100, 100)">
							{#each Array(8) as _, i}
								<path
									d={`M 0,0 L ${Math.cos((i * Math.PI) / 4) * 80},${Math.sin((i * Math.PI) / 4) * 80}`}
									stroke="currentColor"
									stroke-width="3"
									opacity="{1 - i * 0.08}"
								/>
								<polygon
									points={`0,0 ${Math.cos((i * Math.PI) / 4) * 80},${Math.sin((i * Math.PI) / 4) * 80} ${Math.cos(((i + 1) * Math.PI) / 4) * 60},${Math.sin(((i + 1) * Math.PI) / 4) * 60}`}
									fill="currentColor"
									opacity="{0.6 - i * 0.07}"
								/>
							{/each}
						</g>
					</svg>

	
					<div
						class="absolute inset-0 bg-linear-to-br from-primary via-transparent to-accent rounded-full blur-3xl opacity-20 -z-10"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>
