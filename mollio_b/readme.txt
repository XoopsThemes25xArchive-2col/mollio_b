This is a port of the Mollio Type B theme. That theme was created for the Far Cry CMS and is released under several licenses (including GPL, CPL and Creative Commons).  My modifications are released under the same licenses.

http://www.mollio.org/

This theme is a bit different than most. It has blocks in some weird spots. The search block is in the header block. The user menu (when active) and main menu are across the top. This is accomplished with some weird looping with right column blocks in the theme. I don't recommend using this theme on a heavily used site, the loops probably slow things down.

This is a 2 column theme. The right column is used hold blocks for placement in non-standard locations.  The right column block with a weight of 1 goes in the search block at the top.  The right column block with a weight of 2 is the user menu (if this is a user). The right column block with a weight of 3 is the main menu.

This theme kind of supports the new block placements introduced in 2.0.14. The blocks will display, but they aren't broken up into columns, they all appear in the center column.

In addition to the odd column setup, several template changes are needed as well, plus a code change. The code change is optional (it makes each module's menus available in drop downs all the time, the default behavior is only the current modules sub-menus are available.) The template changes should work with other themes equally well.

Installation:

a) Copy mollio_b folder to your themes directory. Don't copy the templates folder.

b) adjust your columns. Move all columns to the left column display, except:
	Assign the search block (if desired) to the right column with a weight of 1.
	Assign the user menu to the right column with a weight of 2.
	Assign the main menu to the right column with a weight of 3.

c) setup the new templates. Don't mess with the default template set. Go to the template set manager and clone your current template set. I use the template manage to edit the template contents as well. Open each of the template files included in the download and copy/paste the contents into the appropriate template file in your new template set.

d) code change.  This step is optional. You might hold off on doing it until you're confident the rest of the theme is operational. This change makes all modules sub-menus available as drop-downs in the main menu. The default behavior is to only show sub-menus for the current theme. The instructions below are for 2.0.14-RC1. I'm not sure if other versions are exactly the same, but I imagine they are close.

	Edit the file modules/system/blocks/system_blocks.php
	Comment out the line (line 125 in my version) that reads:
if ((count($sublinks) > 0) && (!empty($xoopsModule)) && ($i == $xoopsModule->getVar('mid'))) {
	Replace it with a line that reads:
if ((count($sublinks) > 0) && (!empty($xoopsModule))) {

e) set your site preferences general settings
	Set the new cloned template set as the default template set
	Set the new theme as your default theme

Enjoy!
Kevin van Haaren
http://www.superfantasmoworld.com/
webmaster@superfantasmoworld.com
