import os
from glob import glob

folderList = glob("*/")
print(folderList)

# for folder in folderList:
# 	folder = folder[:-1]
# 	cmd = 'convert %s/frame_*.jpg %s.gif' % (folder,folder)
# 	print(cmd)
# 	os.system(cmd)
# 	# exit()

cmd = 'convert -delay 8 -loop 1 bump_syn_optim.gif bump_real_optim.gif plaster_syn_optim.gif plaster_real_optim.gif leather_syn_optim.gif leather_real_optim.gif flake_syn_optim.gif flake_real_optim.gif metal_syn_optim.gif metal_real_optim.gif wood_syn_optim.gif wood_real_optim.gif optim.gif'
os.system(cmd)
cmd = 'convert -delay 8 -loop 1 bump_syn_sample.gif bump_real_sample.gif plaster_syn_sample.gif plaster_real_sample.gif leather_syn_sample.gif leather_real_sample.gif flake_syn_sample.gif flake_real_sample.gif metal_syn_sample.gif metal_real_sample.gif wood_syn_sample.gif wood_real_sample.gif sample.gif'
os.system(cmd)