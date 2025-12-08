<script lang="ts">
	import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "$lib/components/ui/sidebar";
	import { BadgeQuestionMark, LayoutDashboardIcon, SettingsIcon } from "@lucide/svelte";
</script>

<Sidebar collapsible="offcanvas">
	<SidebarHeader class="border-b border-sidebar-border h-14 flex items-center px-4">
		<div class="flex items-center gap-2">
			<div class="size-8 rounded-lg bg-linear-to-br from-primary to-primary/60 flex items-center justify-center">
				<span class="text-sm font-bold text-primary-foreground">P</span>
			</div>
			<span class="font-semibold text-sidebar-foreground">Projects</span>
		</div>
	</SidebarHeader>

	<SidebarContent>
		<SidebarGroup>
			<SidebarGroupLabel>Menu</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton isActive={true}>
							<LayoutDashboardIcon class="size-4" />
							<span>Dashboard</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<SettingsIcon class="size-4" />
							<span>Settings</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>

		<SidebarGroup>
			<SidebarGroupLabel>Help</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<BadgeQuestionMark class="size-4" />
							<span>Documentation</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	</SidebarContent>

	<SidebarFooter class="border-t border-sidebar-border h-14 flex items-center px-4">
		<div class="flex items-center gap-2 w-full">
			<div class="size-8 rounded-full bg-primary/20 flex items-center justify-center">
				<span class="text-xs font-semibold text-primary">U</span>
			</div>
			<div class="flex-1 min-w-0">
				<p class="text-sm font-medium text-sidebar-foreground truncate">User</p>
				<p class="text-xs text-sidebar-foreground/60 truncate">user@example.com</p>
			</div>
		</div>
	</SidebarFooter>

	<SidebarRail />
</Sidebar>
