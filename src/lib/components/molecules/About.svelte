<!-- About.svelte -->
<script lang="ts">
    import { team } from '$lib/data/content';
</script>

<section id="about" class="bg-white py-24">
    <div class="container mx-auto px-6">
        <div class="mb-20 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">About Erti</h2>
            <p class="mx-auto max-w-2xl text-gray-600">
                Building the next generation research tool for writers and researchers.
            </p>
        </div>

        <div class="mx-auto mb-20 max-w-4xl">
            <p class="mb-6 text-lg text-gray-700">
                Erti was born from a simple idea over dinner table: What if I could find a citation from
                my sources for my research?
            </p>
            <p class="mb-6 text-lg text-gray-700">
                Erti has become more than the answer to simple questions and now it is a text editor
                specifically designed for academic writing and research. It intelligently analyzes your
                PDF sources and provides powerful citation tools that work seamlessly as you write. It
                uses machine learning for finding your citations and does not imagine or create texts for
                you. This is important for us since we belive research and academic work should be done by
                humans and tools that are powered with ML should not do more than helping.
            </p>
            <p class="text-lg text-gray-700">
                Our mission is to empower researchers by eliminating the friction between their ideas and
                their tools. We believe that technology should enhance human capability, not impede it. We
                aslo belive this tools should be free and be beneficaial to society and users without
                hidden costs and PRO subscriptions.
            </p>
        </div>

        <div class="mb-12 text-center">
            <h3 class="mb-6 text-2xl font-bold text-gray-800">Meet the Team</h3>
        </div>

        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
            {#each team as member}
                <div class="flex h-full flex-col rounded-xl bg-gray-50 p-8 text-center shadow-md">
                    <div class="mx-auto mb-6">
                        <div class="h-24 w-24 overflow-hidden rounded-full border-4 border-emerald-500">
                            <img src="./profile-pic.jpeg" alt="{member.name}'s Profile Picture" class="h-full w-full object-cover"/>
                        </div>
                    </div>
                    <h4 class="mb-2 text-xl font-semibold text-gray-800">{member.name}</h4>
                    <p class="mb-4 text-sm text-emerald-600">{member.role}</p>
                    <p class="flex-grow text-gray-600">{member.bio}</p>
                </div>
            {/each}
        </div>
    </div>
</section>