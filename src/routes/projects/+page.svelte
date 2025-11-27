<script>
    // GitHub Copilot
    import { onMount } from "svelte";

    // Example projects - replace with your real content/images/links
    let projects = [
        {
            id: 1,
            title: "Leora UI Library",
            description: "A small, accessible component library used across the site with theming support.",
            image: "/images/projects/leora-ui.jpg",
            tags: ["svelte", "design", "components"],
            href: "/projects/leora-ui",
            repo: "https://github.com/nahus/leora-ui",
            date: "2025-03-02"
        },
        {
            id: 2,
            title: "Portfolio Redesign",
            description: "Full redesign and rebuild of the portfolio with attention to responsive layout and performance.",
            image: "/images/projects/portfolio-redesign.jpg",
            tags: ["sveltekit", "performance", "ux"],
            href: "/projects/portfolio-redesign",
            repo: "https://github.com/nahus/portfolio",
            date: "2024-11-18"
        },
        {
            id: 3,
            title: "Analytics Dashboard",
            description: "Interactive charts, filterable datasets and exportable reports for admins.",
            image: "/images/projects/analytics.jpg",
            tags: ["dashboard", "charts", "typescript"],
            href: "/projects/analytics",
            repo: "https://github.com/nahus/analytics",
            date: "2024-07-10"
        },
        {
            id: 4,
            title: "E-commerce Prototype",
            description: "A PWA-ready e-commerce prototype demonstrating checkout flows and offline cart.",
            image: "/images/projects/ecommerce.jpg",
            tags: ["pwa", "stripe", "svelte"],
            href: "/projects/ecommerce",
            repo: "https://github.com/nahus/ecommerce-proto",
            date: "2023-12-01"
        }
    ];

    let query = "";
    let activeTag = "All";
    let tags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

    $: filtered = projects
        .filter(p => activeTag === "All" || p.tags.includes(activeTag))
        .filter(p => {
            const q = query.trim().toLowerCase();
            if (!q) return true;
            return (
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.tags.join(" ").toLowerCase().includes(q)
            );
        });

    // optional: lazy prefetch links
    // onMount(() => {
    //     const prefetchLinks = document.querySelectorAll("[data-prefetch]");
    //     prefetchLinks.forEach(a => {
    //         a.addEventListener("mouseover", () => {
    //             if (a.href) fetch(a.href, { method: "GET", credentials: "same-origin" }).catch(() => {});
    //         }, { once: true });
    //     });
    // });
</script>
<div class="flex flex-col justify-self-center my-6 justify-center items-center w-full">

   
           <h1 class="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
        Our <span class="text-primary">Projects</span> 
      </h1>
      <p class="text-lg text-foreground/90 leading-relaxed">
      Selected work responsive, accessible, and performance-minded.
      </p>
           </div>
<section class="py-12 px-4 max-w-6xl mx-auto text-slate-100 font-sans">
    <header class="flex items-center justify-between gap-6 flex-wrap mb-6">
        

        <div class="flex items-center gap-4 flex-wrap">
            <label class="block">
                <input
                    type="search"
                    placeholder="Search projects, tags, descriptions..."
                    bind:value={query}
                    aria-label="Search projects"
                    class="min-w-[220px] bg-white/5 border border-white/5 text-slate-100 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500/20"
                />
            </label>

            <div class="flex gap-2 flex-wrap" role="list">
                {#each tags as t}
                    <button
                        onclick={() => (activeTag = t)}
                        aria-pressed={t === activeTag}
                      
                        class={"px-3 py-1 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-purple-500/20 " +
                            (t === activeTag
                                ? "bg-linear-to-r from-primary to-accent text-white border-0"
                                : "text-slate-400 border border-white/5 bg-transparent")}
                    >
                        {t}
                    </button>
                {/each}
            </div>
        </div>
    </header>

    <main class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {#if filtered.length === 0}
            <p class="text-slate-400 p-8">No projects match your search.</p>
        {:else}
            {#each filtered as p}
                <article class="rounded-xl overflow-hidden border border-white/5 bg-linear-to-b from-white/2 to-transparent transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
                    <a href={p.href} class="block group" data-prefetch aria-label={p.title}>
                        <figure class="h-40 overflow-hidden bg-linear-to-r from-purple-500/10 to-blue-400/6">
                            <img src={p.image} alt="" loading="lazy" class="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
                        </figure>

                        <div class="p-4">
                            <h2 class="m-0 text-lg font-semibold">{p.title}</h2>
                            <p class="mt-1 text-sm text-slate-400 leading-tight">{p.description}</p>

                            <div class="mt-3 flex items-center justify-between gap-3">
                                <ul class="flex gap-2 flex-wrap list-none p-0 m-0" aria-hidden="true">
                                    {#each p.tags as tag}
                                        <li class="bg-white/5 text-slate-400 px-2 py-0.5 rounded-full text-[0.67rem]">{tag}</li>
                                    {/each}
                                </ul>

                            
                            </div>
                        </div>
                    </a>
                </article>
            {/each}
        {/if}
    </main>
</section>
