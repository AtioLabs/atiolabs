from PIL import Image
import numpy as np
from scipy import ndimage as ndi
from pathlib import Path
im=Image.open('/downloads/image-c8a4b696.png').convert('RGBA');out=Path('public/sprites/review')
regions=[[(214,200,257,220),(282,200,310,219)],[(199,209,242,228),(274,209,302,228)],[(192,191,235,212),(262,191,291,212)],[(177,205,214,219),(249,205,278,220)]]
for i in range(4):
 a=np.array(im.crop((round(i*im.width/4),0,round((i+1)*im.width/4),884)))
 # Drop only tiny isolated transparency debris, preserving steam and character.
 mask=a[:,:,3]>100;l,n=ndi.label(mask);sizes=np.bincount(l.ravel());mask[sizes[l]<12]=False;a[:,:,3]=mask.astype('uint8')*255;a[:,:,:3][~mask]=0
 eyes=np.zeros_like(a)
 for x0,y0,x1,y1 in regions[i]:
  q=a[y0:y1,x0:x1];m=(q[:,:,0]<65)&(q[:,:,1]<65)&(q[:,:,2]<80)&(q[:,:,3]>0)
  eyes[y0:y1,x0:x1][m]=q[m]
  # Replace the painted eye with the local face tone before the separate eye layer.
  tone=np.median(a[y1:y1+5,x0+3:x1-3,:3].reshape(-1,3),axis=0).astype('uint8');q[:,:,:3][m]=tone
 Image.fromarray(a).save(out/f'owner-tea-body-{i}.png',optimize=True)
 Image.fromarray(eyes).save(out/f'owner-tea-eyes-{i}.png',optimize=True)
